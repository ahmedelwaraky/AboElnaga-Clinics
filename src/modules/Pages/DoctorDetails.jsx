import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Award,
  Users,
  Star,
  Calendar,
  ArrowRight,
  Stethoscope,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import Navbar from "../components/Navbar";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";
import {
  getDoctorById,
  detailsNavLinks,
  getDoctorSchedule,
} from "../../data/doctorDeatails";

// ♻️ نفس سكاشن الرئيسية — بداتا الدكتور
import BeforeAfter from "../components/BeforeAfter";
import ReelsVideos from "../components/ReelsVideos";
import Testimonials from "../components/Testimonials";

const STAT_ICONS = [Users, Award, Star, Calendar];

// بانلز المعلومات (نفس الشكل — داتا مختلفة)
const INFO_PANELS = [
  {
    field: "achievements",
    title: "المؤهلات والإنجازات",
    icon: Award,
    caption: (n) => `${n} إنجازات`,
    variant: "list",
  },
  {
    field: "specializations",
    title: "التخصصات",
    icon: Stethoscope,
    caption: (n) => `${n} مجالات علاجية`,
    variant: "chips",
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const { isDark } = useTheme();
  const [showClinicPopup, setShowClinicPopup] = useState(false);
  const openBooking = () => setShowClinicPopup(true);

  const doctor = useMemo(() => getDoctorById(id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 🆕 أي سكشن تروحله من الـ Navbar يقف في نص الشاشة
  useCenteredSections(CENTERED_SECTIONS, [doctor]);

  // Navbar ديناميكي: اللينك يظهر بس لو السكشن فيه داتا
  const navLinks = useMemo(
    () =>
      doctor
        ? detailsNavLinks.filter((l) => !l.field || doctor[l.field]?.length)
        : detailsNavLinks.slice(0, 1),
    [doctor],
  );

  if (!doctor) return <DoctorNotFound isDark={isDark} />;

  const altBg = isDark ? "bg-[#16233A]" : "bg-white";

  return (
    <>
      <Navbar navLinks={navLinks} homeRoute="/" />

      <div
        dir="rtl"
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-[#111C2B]" : "bg-[#F7FAFD]"
        }`}
      >
        {/* ================= HERO ================= */}
        <section
          className={`relative overflow-hidden ${isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"}`}
        >
          <div
            className={`pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl ${
              isDark ? "bg-blue-500/10" : "bg-blue-400/20"
            }`}
          />
          <div
            className={`pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full blur-3xl ${
              isDark ? "bg-blue-400/10" : "bg-blue-300/25"
            }`}
          />

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
              {/* الصورة */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  className={`absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] ${
                    isDark ? "bg-blue-400/20" : "bg-blue-500/20"
                  }`}
                />
                <div
                  className={`relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ${
                    isDark ? "ring-white/15" : "ring-white/60"
                  }`}
                >
                  <img
                    src={doctor.img}
                    alt={doctor.nameAr}
                    className="h-[26rem] w-full object-cover object-top sm:h-[32rem] lg:h-[38rem]"
                  />
                </div>
              </div>

              {/* البيانات */}
              <div className="text-right">
                <span
                  className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
                    isDark
                      ? "border-blue-400/30 bg-blue-400/10 text-blue-200"
                      : "border-blue-300 bg-white/70 text-blue-700"
                  }`}
                >
                  <Stethoscope className="h-4 w-4" />
                  {doctor.roleAr}
                </span>

                <h1
                  className={`mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem] ${
                    isDark ? "text-white" : "text-[#0F2647]"
                  }`}
                >
                  {doctor.nameAr}
                </h1>

                <p
                  className={`mb-8 max-w-xl text-base leading-8 md:text-lg ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {doctor.bio}
                </p>

                <BookButton
                  isDark={isDark}
                  onClick={openBooking}
                  className="mb-8"
                />

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {doctor.stats?.map((stat, index) => {
                    const Icon = STAT_ICONS[index] ?? Award;
                    return (
                      <div
                        key={stat.label}
                        className={`rounded-2xl p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                          isDark
                            ? "border border-white/10 bg-white/5 hover:border-blue-400/40"
                            : "border border-white bg-white/80 shadow-sm hover:shadow-lg"
                        }`}
                      >
                        <Icon
                          className={`mx-auto mb-2 h-6 w-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                        />
                        <div
                          className={`mb-0.5 text-xl font-bold sm:text-2xl ${
                            isDark ? "text-white" : "text-[#0F2647]"
                          }`}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= المؤهلات + التخصصات + المواعيد ================= */}
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          {INFO_PANELS.map(
            (panel) =>
              doctor[panel.field]?.length > 0 && (
                <InfoPanel
                  key={panel.field}
                  {...panel}
                  items={doctor[panel.field]}
                  isDark={isDark}
                />
              ),
          )}

          {/* 🆕 المواعيد */}
          <SchedulePanel doctor={doctor} isDark={isDark} onBook={openBooking} />
        </div>

        {/* ================= الحالات (♻️ BeforeAfter) ================= */}
        <BeforeAfter
          id="cases"
          items={doctor.cases}
          title="حالات سابقة وحالية"
          subtitle={`نتائج حقيقية لمرضى ${doctor.nameAr}`}
          bgClass={altBg}
          withNavSpacer={false}
          showCaption
          onCtaClick={openBooking}
        />

        {/* ================= الفيديوهات (♻️ ReelsVideos) ================= */}
        <ReelsVideos
          items={doctor.videos}
          title="فيديوهات الدكتور"
          subtitle={`شاهد ${doctor.nameAr} وهو يشرح الحالات عملياً`}
          bgClass="bg-transparent"
          withNavSpacer={false}
        />

        {/* ================= آراء المرضى (♻️ Testimonials) ================= */}
        <Testimonials
          id="reviews"
          doctorId={doctor.id}
          staticReviews={doctor.reviews}
          title="آراء المرضى"
          subtitle={`تجارب المرضى مع ${doctor.nameAr}`}
          bgClass={altBg}
          withNavSpacer={false}
        />

        {/* ================= CTA ================= */}
        <section
          id="booking"
          className={`scroll-mt-24 py-16 lg:py-20 ${isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"}`}
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              className={`mb-4 text-2xl font-bold md:text-3xl ${isDark ? "text-white" : "text-[#0F2647]"}`}
            >
              هل تريد حجز موعد مع {doctor.nameAr}؟
            </h2>
            <p
              className={`mb-8 text-base md:text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              احجز استشارتك المجانية الآن واحصل على ابتسامة أحلامك
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <BookButton isDark={isDark} onClick={openBooking} />
              <a
                href="tel:01227599182"
                className={`inline-flex items-center gap-2 rounded-full border-2 px-9 py-4 text-base font-bold transition-all hover:scale-105 ${
                  isDark
                    ? "border-white/25 text-white hover:bg-white/10"
                    : "border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <Phone className="h-5 w-5" />
                اتصل بنا
              </a>
            </div>
          </div>
        </section>
      </div>

      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </>
  );
};

/* ===== زرار الحجز (كان متكرر في الـ Hero والـ CTA) ===== */
const BookButton = ({ isDark, onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${
      isDark
        ? "bg-blue-500 shadow-blue-500/30 hover:bg-blue-600"
        : "bg-blue-600 shadow-blue-600/25 hover:bg-blue-700"
    } ${className}`}
  >
    احجز موعدك الآن
    <Calendar className="h-5 w-5" />
  </button>
);

/* ===== هيدر البانل (مشترك بين InfoPanel و SchedulePanel) ===== */
const PanelHeader = ({ icon: Icon, title, subtitle, isDark }) => (
  <div className="flex shrink-0 items-center gap-3 lg:w-56">
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
        isDark ? "bg-blue-400/15 text-blue-300" : "bg-blue-50 text-blue-600"
      }`}
    >
      <Icon className="h-5 w-5" />
    </span>
    <div>
      <h2
        className={`text-xl font-bold leading-tight ${isDark ? "text-white" : "text-[#0F2647]"}`}
      >
        {title}
      </h2>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const PanelShell = ({ id, isDark, children }) => (
  <section
    id={id}
    className={`scroll-mt-24 rounded-3xl border p-7 sm:p-9 ${
      isDark
        ? "border-white/10 bg-[#16233A]"
        : "border-gray-200/80 bg-white shadow-sm"
    }`}
  >
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
      {children}
    </div>
  </section>
);

const Divider = ({ isDark }) => (
  <div
    className={`hidden w-px self-stretch lg:block ${isDark ? "bg-white/10" : "bg-gray-200"}`}
  />
);

/* ===== 🆕 كل سكاشن الصفحة تقف في نص الشاشة لما تروحلها من الـ Navbar =====
   بيحسب scroll-margin-top = (ارتفاع الشاشة - ارتفاع السكشن) / 2 لكل سكشن ليه id.
   بيشتغل مع أي طريقة scroll (anchor href أو scrollIntoView).
   لو السكشن أطول من الشاشة → يقف تحت الـ Navbar (minTop).
*/
const CENTERED_SECTIONS = [
  "achievements",
  "specializations",
  "schedule",
  "cases",
  "videos",
  "reviews",
  "booking",
];

const useCenteredSections = (ids, deps = [], minTop = 96) => {
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const update = () => {
      elements.forEach((el) => {
        const margin = Math.max(
          minTop,
          (window.innerHeight - el.offsetHeight) / 2,
        );
        el.style.scrollMarginTop = `${margin}px`;
      });
    };

    update();
    const observer = new ResizeObserver(update);
    elements.forEach((el) => observer.observe(el));
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

/* ===== بانل معلومات: chips للتخصصات / list للإنجازات ===== */
const InfoPanel = ({ field, title, icon, caption, items, variant, isDark }) => (
  <PanelShell id={field} isDark={isDark}>
    <PanelHeader
      icon={icon}
      title={title}
      subtitle={caption(items.length)}
      isDark={isDark}
    />
    <Divider isDark={isDark} />

    {variant === "list" ? (
      <ul className="grid flex-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-2.5 text-sm leading-7 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            <CheckCircle2
              className={`mt-1 h-4 w-4 shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 sm:text-sm ${
              isDark
                ? "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-200"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                isDark
                  ? "bg-gray-600 group-hover:bg-blue-400"
                  : "bg-gray-300 group-hover:bg-blue-500"
              }`}
            />
            {item}
          </span>
        ))}
      </div>
    )}
  </PanelShell>
);

/* ===== 🆕 بانل المواعيد =====
   كارت لكل عيادة:
   - مواعيد خاصة بالدكتور (زي د. ندى) → أيامه + بادج "مواعيد خاصة"
   - غير كده → مواعيد العيادة الأساسية من CLINICS
*/
const SchedulePanel = ({ doctor, isDark, onBook }) => {
  const clinics = useMemo(() => getDoctorSchedule(doctor), [doctor]);
  const hasCustom = clinics.some((c) => c.isCustom);

  const muted = isDark ? "text-gray-400" : "text-gray-500";
  const accent = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <PanelShell id="schedule" isDark={isDark}>
      <PanelHeader
        icon={Clock}
        title="المواعيد"
        subtitle={
          hasCustom
            ? `مواعيد خاصة في ${clinics.length} عيادات`
            : "مواعيد العيادة الأساسية"
        }
        isDark={isDark}
      />
      <Divider isDark={isDark} />

      <div className="flex-1 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {clinics.map((clinic) => (
            <div
              key={clinic.key}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/10 bg-white/5 hover:border-blue-400/40"
                  : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {/* اسم العيادة + نوع المواعيد */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className={`h-5 w-5 shrink-0 ${accent}`} />
                  <h3
                    className={`text-base font-bold ${isDark ? "text-white" : "text-[#0F2647]"}`}
                  >
                    {clinic.nameAr}
                  </h3>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    clinic.isCustom
                      ? isDark
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-emerald-50 text-emerald-700"
                      : isDark
                        ? "bg-white/10 text-gray-300"
                        : "bg-gray-200/70 text-gray-600"
                  }`}
                >
                  {clinic.isCustom ? "مواعيد خاصة" : "مواعيد العيادة"}
                </span>
              </div>

              {/* الأيام */}
              {clinic.daysAr.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {clinic.daysAr.map((day) => (
                    <span
                      key={day}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                        isDark
                          ? "bg-blue-400/15 text-blue-200"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              ) : (
                <p
                  className={`text-sm leading-7 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  متاح طوال أيام عمل العيادة
                </p>
              )}

              {/* الساعات */}
              {clinic.hoursAr && (
                <div
                  className={`mt-3 flex items-center gap-2 text-sm ${muted}`}
                >
                  <Clock className="h-4 w-4 shrink-0" />
                  {clinic.hoursAr}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onBook}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 ${
            isDark
              ? "border-blue-400/40 text-blue-200 hover:bg-blue-400/10"
              : "border-blue-300 text-blue-700 hover:bg-blue-50"
          }`}
        >
          <Calendar className="h-4 w-4" />
          احجز في العيادة الأقرب لك
        </button>
      </div>
    </PanelShell>
  );
};

/* ===== الدكتور غير موجود ===== */
const DoctorNotFound = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar navLinks={[{ label: "الرئيسية", to: "/" }]} homeRoute="/" />
      <div
        className={`flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center ${
          isDark ? "bg-[#1a2332]" : "bg-gray-50"
        }`}
      >
        <h1
          className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
        >
          لم يتم العثور على الطبيب
        </h1>
        <p className={isDark ? "text-gray-400" : "text-gray-600"}>
          الرابط الذي تحاول الوصول إليه غير صحيح أو تم حذفه.
        </p>
        <button
          onClick={() => navigate("/")}
          className={`inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition-all hover:scale-105 ${
            isDark
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <ArrowRight className="h-5 w-5" />
          العودة للرئيسية
        </button>
      </div>
    </>
  );
};

export default DoctorDetails;
