import { useMemo } from "react";
import { useTheme } from "../../core/createContext";
import {
  specializations,
  getStats,
  getYearsOfExperience,
  GRADUATION_YEAR,
} from "../../data/AboutDoctor";
import DoctorImage from "../../assets/images/main/DR-AHMED.png";

const AboutDoctor = () => {
  const { isDark } = useTheme();

  const years = useMemo(() => getYearsOfExperience(), []);
  const stats = useMemo(() => getStats(), []);

  return (
    <section
      id="about"
      className={`overflow-hidden py-20 ${isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]"}`}
    >
      {/* الأنيميشن مرة واحدة بس */}
      <style>{`
        @keyframes floatingBadge {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-badge { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20" />

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* ===== صورة الطبيب ===== */}
          <div className="flex justify-center md:order-1">
            {/* px عشان البادج مايخرجش بره الشاشة على الموبايل */}
            <div className="relative w-full max-w-md px-3 sm:px-0">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl ${
                  isDark ? "shadow-black/50" : "shadow-gray-400/30"
                }`}
              >
                <img
                  src={DoctorImage}
                  alt="د. أحمد أبو النجا"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* ===== بادج سنوات الخبرة ===== */}
              <div
                className="floating-badge absolute -bottom-4 left-0 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 shadow-2xl transition-transform duration-300 hover:scale-110 sm:-bottom-6 sm:-left-6 sm:p-6"
                style={{ animation: "floatingBadge 3s ease-in-out infinite" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {years}+
                  </div>
                  <div className="text-xs font-medium text-gray-800 sm:text-sm">
                    سنة خبرة
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== المحتوى ===== */}
          <div className="text-right md:order-2">
            <h2
              className={`mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              تعرف على د. أحمد أبو النجا
            </h2>

            <p className={`mb-6 text-lg sm:text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              أخصائي طب وجراحة الفم وتقويم الأسنان
            </p>

            <p
              className={`mb-8 text-base leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              الدكتور أحمد أبو النجا بخبرة أكثر من {years} عام في مجال طب الأسنان
              منذ تخرجه عام {GRADUATION_YEAR}. حاصل على بكالوريوس طب وجراحة الفم
              والأسنان وجراحات متقدمة في زراعة الأسنان وتجميلها، وماجستير متقدم في
              تقويم الأسنان. تخصص الدكتور أحمد في تقويم الأسنان، ويسعى دائماً
              لمواكبة أحدث التقنيات لضمان راحة المرضى.
            </p>

            <h3 className={`mb-4 text-xl font-bold ${isDark ? "text-white" : "text-gray-700"}`}>
              التخصصات
            </h3>

            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className={`rounded-lg px-4 py-3 text-center text-sm font-medium transition-transform duration-200 hover:scale-105 ${
                    isDark
                      ? "border border-blue-700/50 bg-blue-900/50 text-blue-300 hover:bg-blue-800/60"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {spec.text}
                </span>
              ))}
            </div>

            {/* ===== الإحصائيات ===== */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group cursor-pointer rounded-xl p-6 text-center hover:-translate-y-2 ${
                      isDark
                        ? "border border-gray-700/50 bg-[#1a2332] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                        : "bg-white shadow-md hover:shadow-2xl hover:shadow-blue-300/30"
                    }`}
                    style={{ transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                  >
                    <IconComponent
                      className={`mx-auto mb-3 h-8 w-8 group-hover:rotate-12 group-hover:scale-125 ${
                        isDark ? "text-blue-400" : "text-blue-500"
                      }`}
                      style={{
                        transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                      }}
                    />
                    <div
                      className={`mb-1 text-2xl font-bold transition-transform duration-300 group-hover:scale-110 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
  );
};

export default AboutDoctor;