import { useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  CalendarClock,
  Music2,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import MainLogo from "../../assets/images/main/MainLogo.png";
import { locations as branches, getDirectionsUrl } from "../../data/branches";

/* ===== روابط السوشيال في مكان واحد ===== */
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AboelnagaDC",
    icon: Facebook,
    hover: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aboelnagadc/",
    icon: Instagram,
    hover: "hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#962FBF]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@aboelnagaclinics",
    icon: Youtube,
    hover: "hover:bg-[#FF0000]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@AboelnagaDC",
    icon: Music2,
    hover: "hover:bg-black",
  },
];

const quickLinks = [
  { text: "من نحن", href: "#about" },
  { text: "الخدمات", href: "#services" },
  { text: "الفريق", href: "#team" },
  { text: "قبل وبعد", href: "#results" },
  { text: "الفيديوهات", href: "#videos" },
  { text: "الفروع", href: "#locations" },
  { text: "اتصل بنا", href: "#footer" },
];

const services = [
  { text: "طب الأسنان التجميلي", href: "#services" },
  { text: "تبييض الأسنان", href: "#services" },
  { text: "زراعة الأسنان", href: "#services" },
  { text: "التقويم الشفاف والمتحرك", href: "#services" },
  { text: "علاج الجذور", href: "#services" },
  { text: "الرعاية الوقائية", href: "#services" },
  { text: "طب أسنان الأطفال", href: "#services" },
  { text: "القشور الخزفية", href: "#services" },
];

const PHONE = "01227599182";
const EMAIL = "ask@drahmedaboelnaga.com";
const WEEK_HOURS = "السبت - الخميس: 10 صباحاً - 10 مساءً";

const Footer = () => {
  const { isDark } = useTheme();

  /* ===== معاد الجمعة: موحّد ولا مختلف بين الفروع؟ ===== */
  const friday = useMemo(() => {
    const values = [
      ...new Set(branches.map((b) => b.fridayAr).filter(Boolean)),
    ];
    if (values.length === 0) return null;
    if (values.length === 1) return { unified: true, text: values[0] };
    return { unified: false, text: "الجمعة: المواعيد تختلف حسب الفرع" };
  }, []);

  /* سطر مختصر لكل فرع: اسم المنطقة - أقرب علامة مميزة */
  const footerLine = (b) =>
    `${b.nameAr.replace("عيادات ", "")} - ${b.addressAr.split(" - ")[0]}`;

  const linkClass = isDark
    ? "text-gray-300 hover:text-blue-400"
    : "text-gray-300 hover:text-blue-500";
  const iconClass = isDark ? "text-blue-400" : "text-blue-500";

  return (
    <footer
      id="footer"
      dir="rtl"
      className={`overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#0f1419] text-white" : "bg-gray-900 text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 text-right md:grid-cols-2 lg:grid-cols-4">
          {/* ===== اللوجو والنبذة ===== */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={MainLogo}
                  alt="عيادات الدكتور أحمد أبو النجا"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">عيادات أبو النجا</span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              التميز في رعاية الأسنان مع لمسة شخصية.
              <br />
              شريكك الموثوق لابتسامة صحية وجميلة.
            </p>

            {/* ===== أيقونات السوشيال ===== */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon, hover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all
                              duration-300 hover:rotate-6 hover:scale-110 focus-visible:outline-none
                              focus-visible:ring-2 focus-visible:ring-white/50 ${hover}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ===== روابط سريعة ===== */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className={`transition-colors ${linkClass}`}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== الخدمات ===== */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.text}>
                  <a href={service.href} className={`transition-colors ${linkClass}`}>
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== بيانات التواصل ===== */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">اتصل بنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className={`h-5 w-5 shrink-0 ${iconClass}`} />
                <a href={`tel:${PHONE}`} className={`min-w-0 transition-colors ${linkClass}`}>
                  هاتف: <span dir="ltr">{PHONE}</span>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className={`h-5 w-5 shrink-0 ${iconClass}`} />
                <a
                  href={`mailto:${EMAIL}`}
                  dir="ltr"
                  className={`min-w-0 break-all text-right transition-colors ${linkClass}`}
                >
                  {EMAIL}
                </a>
              </div>

              {/* الفروع - بتتحدث أوتوماتيك من branches.js */}
              {branches.map((b) => (
                <div key={b.id} className="flex items-start gap-3">
                  <MapPin className={`h-5 w-5 shrink-0 ${iconClass}`} />
                  <a
                    href={getDirectionsUrl(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`min-w-0 transition-colors ${linkClass}`}
                  >
                    {footerLine(b)}
                  </a>
                </div>
              ))}

              {/* ===== مواعيد أيام الأسبوع ===== */}
              <div className="flex items-start gap-3">
                <Clock className={`h-5 w-5 shrink-0 ${iconClass}`} />
                <p className="min-w-0 text-gray-300">{WEEK_HOURS}</p>
              </div>

              {/* ===== معاد الجمعة ===== */}
              {friday && (
                <div className="flex items-start gap-3">
                  <CalendarClock className={`h-5 w-5 shrink-0 ${iconClass}`} />
                  <div className="min-w-0 text-gray-300">
                    <span className="block">{friday.text}</span>
                    {!friday.unified && (
                      <a
                        href="#locations"
                        className={`mt-1 inline-block text-xs font-semibold transition-colors ${
                          isDark
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-500 hover:text-blue-400"
                        }`}
                      >
                        شوف مواعيد كل فرع ←
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ===== الشريط السفلي ===== */}
        <div className="mt-8 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p className="text-center">
              جميع الحقوق محفوظة © {new Date().getFullYear()} عيادات أبو النجا
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { text: "سياسة الخصوصية", href: "#privacy" },
                { text: "شروط الخدمة", href: "#terms" },
                { text: "سياسة الكوكيز", href: "#cookies" },
              ].map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  className={`transition-colors ${
                    isDark ? "hover:text-blue-400" : "hover:text-blue-500"
                  }`}
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;