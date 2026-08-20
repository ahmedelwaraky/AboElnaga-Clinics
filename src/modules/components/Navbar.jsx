import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Phone, Menu, X, ChevronLeft } from "lucide-react";
import MainLogo from "../../assets/images/main/MainLogo.png";
import { useTheme } from "../../core/createContext";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";

const defaultNavLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "عن الطبيب", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "الفريق", href: "#team" },
  { label: "الفيديوهات", href: "#videos" },
  { label: "النتائج", href: "#results" },
  { label: "الفروع", href: "#locations" },
  { label: "تواصل معنا", href: "#footer" },
];

const PHONE = "01227599182";

const Navbar = ({ navLinks = defaultNavLinks, homeRoute = null }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showClinicPopup, setShowClinicPopup] = useState(false);

  /* قفل تمرير الصفحة وقت فتح المنيو */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* قفل المنيو بمفتاح Escape */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const LogoWrapper = homeRoute ? Link : "div";
  const logoProps = homeRoute ? { to: homeRoute } : {};

  /* تمرير ناعم للأقسام في نفس الصفحة */
  const handleAnchor = (e, href) => {
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ===== رابط الديسكتوب ===== */
  const renderDesktopLink = (link, index) => {
    const cls = `relative whitespace-nowrap text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:right-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
      isDark
        ? "text-gray-300 hover:text-white after:bg-blue-400"
        : "text-gray-700 hover:text-gray-900 after:bg-blue-600"
    }`;

    if (link.to) {
      return (
        <Link key={index} to={link.to} className={cls}>
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={index}
        href={link.href}
        onClick={(e) => handleAnchor(e, link.href)}
        className={cls}
      >
        {link.label}
      </a>
    );
  };

  /* ===== رابط الموبايل — block بعرض كامل ===== */
  const renderMobileLink = (link, index) => {
    const cls = `flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-200 ${
      isDark
        ? "text-gray-200 hover:bg-white/10 active:bg-white/15"
        : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
    }`;

    const content = (
      <>
        <span>{link.label}</span>
        <ChevronLeft className={`h-4 w-4 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
      </>
    );

    if (link.to) {
      return (
        <Link key={index} to={link.to} onClick={() => setMobileMenuOpen(false)} className={cls}>
          {content}
        </Link>
      );
    }

    return (
      <a
        key={index}
        href={link.href}
        onClick={(e) => {
          handleAnchor(e, link.href);
          setMobileMenuOpen(false);
        }}
        className={cls}
      >
        {content}
      </a>
    );
  };

  return (
    <>
      <nav
        dir="rtl"
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          isDark ? "border-gray-800 bg-gray-900/95" : "border-gray-200 bg-white/95"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
            {/* ===== اللوجو ===== */}
            <LogoWrapper
              {...logoProps}
              className={`flex min-w-0 shrink items-center gap-2.5 sm:gap-3 ${
                homeRoute ? "cursor-pointer" : ""
              }`}
            >
              <img
                src={MainLogo}
                alt="عيادات أبو النجا"
                className="h-9 w-9 shrink-0 object-contain sm:h-12 sm:w-12"
              />
              <div className="flex min-w-0 flex-col">
                <span
                  className={`truncate text-sm font-bold leading-tight sm:text-lg ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  عيادات أبو النجا
                </span>
                <span
                  className={`truncate text-[10px] leading-tight sm:text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  لتقويم وزراعة الأسنان
                </span>
              </div>
            </LogoWrapper>

            {/* ===== روابط الديسكتوب ===== */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navLinks.map(renderDesktopLink)}
            </div>

            {/* ===== الأدوات ===== */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2.5">
              <a
                href={`tel:${PHONE}`}
                className={`hidden items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-300 xl:flex ${
                  isDark ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium" dir="ltr">
                  {PHONE}
                </span>
              </a>

              <button
                onClick={toggleTheme}
                aria-label="تبديل الوضع"
                className={`rounded-lg p-2 transition-colors duration-300 sm:p-2.5 ${
                  isDark ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setShowClinicPopup(true)}
                className="hidden rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:bg-blue-600 active:scale-95 md:block"
              >
                احجز موعد
              </button>

              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="القائمة"
                aria-expanded={mobileMenuOpen}
                className={`rounded-lg p-2 transition-colors duration-300 sm:p-2.5 lg:hidden ${
                  isDark ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== خلفية معتمة ===== */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ===== درج القائمة (منزلق من اليمين) ===== */}
      <aside
        dir="rtl"
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-[#111827]" : "bg-white"}`}
      >
        {/* رأس الدرج */}
        <div
          className={`flex shrink-0 items-center justify-between border-b px-5 py-4 ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <img src={MainLogo} alt="" className="h-9 w-9 shrink-0 object-contain" />
            <span
              className={`truncate text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              عيادات أبو النجا
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="إغلاق"
            className={`shrink-0 rounded-lg p-2 transition-colors ${
              isDark
                ? "text-gray-400 hover:bg-white/10 hover:text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* الروابط */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navLinks.map(renderMobileLink)}
        </nav>

        {/* تذييل الدرج */}
        <div
          className={`shrink-0 space-y-3 border-t px-5 py-5 ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => {
              setShowClinicPopup(true);
              setMobileMenuOpen(false);
            }}
            className="w-full rounded-xl bg-blue-500 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-blue-600 active:scale-[0.98]"
          >
            احجز موعد
          </button>
<a
          
            href={`tel:${PHONE}`}
            className={`flex w-full items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-bold transition-colors ${
              isDark
                ? "border-gray-700 text-gray-200 hover:bg-white/5"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span dir="ltr">{PHONE}</span>
          </a>
        </div>
      </aside>

      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </>
  );
};

export default Navbar;