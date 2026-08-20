import { useParams, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../../core/createContext";
import {
  Award,
  Users,
  Star,
  Calendar,
  ExternalLink,
  ArrowRight,
  Stethoscope,
  Quote,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "../../shared/ui/Card";
import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";
import { getDoctorById } from "../../data/doctorDeatails";

const STAT_ICONS = [Users, Award, Star, Calendar];

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [showClinicPopup, setShowClinicPopup] = useState(false);

  const doctor = useMemo(() => getDoctorById(id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  /* ===== Navbar ديناميكي: يعرض بس السكاشن الموجودة فعلاً ===== */
  const navLinks = useMemo(() => {
    if (!doctor) return [{ label: "الرئيسية", to: "/" }];

    const links = [{ label: "الرئيسية", to: "/" }];
    if (doctor.specializations?.length)
      links.push({ label: "التخصصات", href: "#specializations" });
    if (doctor.videos?.length)
      links.push({ label: "الفيديوهات", href: "#videos" });
    if (doctor.reviews?.length)
      links.push({ label: "آراء المرضى", href: "#reviews" });
    links.push({ label: "احجز موعد", href: "#booking" });

    return links;
  }, [doctor]);

  /* ===== الدكتور غير موجود ===== */
  if (!doctor) {
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
  }

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
          className={`relative overflow-hidden ${
            isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"
          }`}
        >
          {/* دوائر زخرفية */}
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
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
              {/* ===== الصورة ===== */}
              <div className="order-1 lg:order-2">
                {" "}
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  {/* إطار زخرفي خلفي */}
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
              </div>

              {/* ===== البيانات ===== */}
              {/* ===== البيانات ===== */}
              <div className="order-2 text-right lg:order-1">
                {" "}
                {/* شارة التخصص */}
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
                {/* زر حجز سريع */}
                <button
                  onClick={() => setShowClinicPopup(true)}
                  className={`mb-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? "bg-blue-500 shadow-blue-500/30 hover:bg-blue-600"
                      : "bg-blue-600 shadow-blue-600/25 hover:bg-blue-700"
                  }`}
                >
                  احجز موعدك الآن
                  <Calendar className="h-5 w-5" />
                </button>
                {/* الإحصائيات */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {doctor.stats?.map((stat, index) => {
                    const IconComponent = STAT_ICONS[index] ?? Award;
                    return (
                      <div
                        key={stat.label}
                        className={`rounded-2xl p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                          isDark
                            ? "border border-white/10 bg-white/5 hover:border-blue-400/40"
                            : "border border-white bg-white/80 shadow-sm hover:shadow-lg"
                        }`}
                      >
                        <IconComponent
                          className={`mx-auto mb-2 h-6 w-6 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <div
                          className={`mb-0.5 text-xl font-bold sm:text-2xl ${
                            isDark ? "text-white" : "text-[#0F2647]"
                          }`}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
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

        {/* ================= التخصصات ================= */}
        {doctor.specializations?.length > 0 && (
          <section id="specializations" className="scroll-mt-24 py-12 lg:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`rounded-3xl border p-7 sm:p-9 ${
                  isDark
                    ? "border-white/10 bg-[#16233A]"
                    : "border-gray-200/80 bg-white shadow-sm"
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  {/* العنوان الجانبي */}
                  <div className="shrink-0 lg:w-56">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isDark
                            ? "bg-blue-400/15 text-blue-300"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Stethoscope className="h-5 w-5" />
                      </span>
                      <div>
                        <h2
                          className={`text-xl font-bold leading-tight ${
                            isDark ? "text-white" : "text-[#0F2647]"
                          }`}
                        >
                          التخصصات
                        </h2>
                        <p className="text-xs text-gray-500">
                          {doctor.specializations.length} مجالات علاجية
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* فاصل رأسي */}
                  <div
                    className={`hidden w-px self-stretch lg:block ${
                      isDark ? "bg-white/10" : "bg-gray-200"
                    }`}
                  />

                  {/* الـ chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {doctor.specializations.map((spec) => (
                      <span
                        key={spec}
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
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= الفيديوهات ================= */}
        {doctor.videos?.length > 0 && (
          <section
            id="videos"
            className={`scroll-mt-24 py-16 lg:py-20 ${
              isDark ? "bg-[#16233A]" : "bg-white"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading isDark={isDark} title="فيديوهات الدكتور" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {doctor.videos.map((video) => (
                  <Card
                    key={video.id}
                    className={`overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isDark
                        ? "border-gray-700/60 bg-[#1E2E45]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="relative bg-black">
                      <video
                        src={video.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="aspect-[9/13] w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3
                        className={`mb-2 text-right text-base font-bold ${
                          isDark ? "text-white" : "text-[#0F2647]"
                        }`}
                      >
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        {video.url && (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                              isDark
                                ? "text-blue-400 hover:text-blue-300"
                                : "text-blue-600 hover:text-blue-700"
                            }`}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            مشاهدة على تيك توك
                          </a>
                        )}
                        {video.duration && (
                          <span
                            className={`text-xs ${
                              isDark ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            {video.duration}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= آراء المرضى ================= */}
        {doctor.reviews?.length > 0 && (
          <section id="reviews" className="scroll-mt-24 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading isDark={isDark} title="آراء المرضى" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {doctor.reviews.map((review) => (
                  <Card
                    key={review.id}
                    className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "border-gray-700/60 bg-[#1E2E45]"
                        : "border-gray-200 bg-white shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <Quote
                      className={`absolute left-5 top-5 h-8 w-8 opacity-15 ${
                        isDark ? "text-blue-300" : "text-blue-600"
                      }`}
                    />
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p
                      className={`mb-5 flex-1 text-right text-sm leading-7 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {review.comment}
                    </p>
                    <div
                      className={`flex items-center justify-between border-t pt-4 ${
                        isDark ? "border-gray-700/60" : "border-gray-100"
                      }`}
                    >
                      <span className="text-xs text-gray-500">
                        {review.date}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          isDark ? "text-white" : "text-[#0F2647]"
                        }`}
                      >
                        {review.name}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= CTA ================= */}
        <section
          id="booking"
          className={`scroll-mt-24 py-16 lg:py-20 ${
            isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"
          }`}
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              className={`mb-4 text-2xl font-bold md:text-3xl ${
                isDark ? "text-white" : "text-[#0F2647]"
              }`}
            >
              هل تريد حجز موعد مع {doctor.nameAr}؟
            </h2>
            <p
              className={`mb-8 text-base md:text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              احجز استشارتك المجانية الآن واحصل على ابتسامة أحلامك
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowClinicPopup(true)}
                className={`inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                احجز موعدك الآن
                <Calendar className="h-5 w-5" />
              </button>
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

      {/* ===== Popup اختيار العيادة ===== */}
      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </>
  );
};

/* ===== عنوان سكشن موحّد ===== */
const SectionHeading = ({ isDark, title }) => (
  <div className="mb-10 text-right">
    <h2
      className={`mb-3 text-2xl font-bold md:text-3xl ${
        isDark ? "text-white" : "text-[#0F2647]"
      }`}
    >
      {title}
    </h2>
    <div
      className={`h-1 w-16 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-600"}`}
    />
  </div>
);

export default DoctorDetails;
