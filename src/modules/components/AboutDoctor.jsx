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

  // بتتحسب وقت الـ render مش وقت الـ build
  const years = useMemo(() => getYearsOfExperience(), []);
  const stats = useMemo(() => getStats(), []);

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-20"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Doctor Image - Always First on Mobile */}
          <div className="flex justify-center md:order-1">
            <div className="relative w-full max-w-md">
              {/* Main Image Container */}
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ${
                  isDark ? "shadow-black/50" : "shadow-gray-400/30"
                }`}
              >
                <img
                  src={DoctorImage}
                  alt="د. أحمد أبو النجا"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-6 hover:scale-110 transition-transform duration-300"
                style={{ animation: "floating 3s ease-in-out infinite" }}
              >
                <style>
                  {`
                    @keyframes floating {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-10px); }
                    }
                  `}
                </style>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">
                    {years}+
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    سنة خبرة
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Second on Mobile */}
          <div className="text-right md:order-2">
            {/* Title */}
            <h2
              className={`text-4xl md:text-5xl font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              تعرف على د. أحمد أبو النجا
            </h2>

            {/* Subtitle */}
            <p
              className={`text-xl mb-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              أخصائي طب وجراحة الفم وتقويم الأسنان
            </p>

            {/* Description */}
            <p
              className={`text-base leading-relaxed mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              الدكتور أحمد أبو النجا بخبرة أكثر من {years} عام في مجال طب الأسنان
              منذ تخرجه عام {GRADUATION_YEAR}. حاصل على بكالوريوس طب وجراحة الفم
              والأسنان وجراحات متقدمة في زراعة الأسنان وتجميلها، وماجستير متقدم في
              تقويم الأسنان. تخصص الدكتور أحمد في تقويم الأسنان، ويسعى دائماً
              لمواكبة أحدث التقنيات لضمان راحة المرضى.
            </p>

            {/* Specializations Heading */}
            <h3
              className={`text-xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              التخصصات
            </h3>

            {/* Specializations Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-center transition-transform duration-200 hover:scale-105 ${
                    isDark
                      ? "bg-blue-900/50 text-blue-300 border border-blue-700/50 hover:bg-blue-800/60"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {spec.text}
                </span>
              ))}
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-xl p-6 text-center group cursor-pointer transition-all duration-[400ms] hover:-translate-y-2 ${
                      isDark
                        ? "bg-[#1a2332] border border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                        : "bg-white shadow-md hover:shadow-2xl hover:shadow-blue-300/30"
                    }`}
                    style={{
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <IconComponent
                      className={`w-8 h-8 mx-auto mb-3 transition-all duration-[400ms] group-hover:scale-125 group-hover:rotate-12 ${
                        isDark ? "text-blue-400" : "text-blue-500"
                      }`}
                      style={{
                        transition:
                          "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                      }}
                    />
                    <div
                      className={`text-2xl font-bold mb-1 transition-transform duration-300 group-hover:scale-110 ${
                        isDark ? "text-white" : "text-gray-900"
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
  );
};

export default AboutDoctor;