import { useTheme } from "../../core/createContext";
import { teamMembers } from "../../data/team";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* قص السطور بدون ما تعتمد على plugin line-clamp */
const clamp = (lines) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lines,
  overflow: "hidden",
});

const Team = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const handleDoctorClick = (doctorId) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (activeCard === doctorId) {
        navigate(`/doctor-details/${doctorId}`);
      } else {
        setActiveCard(doctorId);
      }
    } else {
      navigate(`/doctor-details/${doctorId}`);
    }
  };

  return (
    <section
      id="team"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"
      } overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-16 md:h-20"></div>

        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            تعرف على فريقنا المتخصص
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6 md:mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            محترفون ملتزمون بصحتك وراحتك في طب الأسنان
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div
              className={`h-[2px] w-24 md:w-32 rounded-full ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-blue-400 to-blue-400"
                  : "bg-gradient-to-r from-transparent via-blue-500 to-blue-500"
              }`}
            ></div>
            <div
              className={`h-[2px] w-24 md:w-32 rounded-full ${
                isDark
                  ? "bg-gradient-to-l from-transparent via-blue-400 to-blue-400"
                  : "bg-gradient-to-l from-transparent via-blue-500 to-blue-500"
              }`}
            ></div>
          </div>

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 md:mt-6">
            <div
              className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-300" : "bg-blue-400"}`}
            ></div>
            <div
              className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-300" : "bg-blue-400"}`}
            ></div>
            <div
              className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-300" : "bg-blue-400"}`}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          autoplay={true}
          autoplayDelay={3000}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch py-2">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4 h-auto"
              >
                {/* ===== الكارت: الصورة لحدود البوردر بالظبط ===== */}
                <div
                  onClick={() => handleDoctorClick(member.id)}
                  className={`group relative h-[24rem] w-full cursor-pointer overflow-hidden rounded-[1.5rem] border bg-transparent transition-all duration-500 ${
                    activeCard === member.id ? "ring-2 ring-blue-500" : ""
                  } ${
                    isDark
                      ? "border-white/15 hover:border-blue-400/60"
                      : "border-gray-300/70 hover:border-blue-400"
                  }`}
                >
                  <img
                    src={member.img}
                    alt={member.nameAr}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.07]"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        target.nextElementSibling.style.display = "flex";
                      }
                    }}
                  />

                  {/* Fallback: Initials Circle */}
                  <div
                    className={`absolute inset-0 hidden items-center justify-center ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/90 to-blue-500/60"
                        : "bg-gradient-to-br from-blue-600/90 to-blue-600/60"
                    }`}
                  >
                    <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-white/10" />
                    <div className="absolute bottom-0 left-0 h-24 w-24 translate-y-12 -translate-x-12 rounded-full bg-white/10" />
                    <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                      <span
                        className={`text-5xl font-bold ${
                          isDark ? "text-blue-500" : "text-blue-600"
                        }`}
                      >
                        {member.nameAr
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>

                  {/* تدرّج خفيف تحت عشان اللوحة تبان */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

                  {/* ===== لوحة الاسم والتخصص (Floating Panel) ===== */}
                  <div
                    className={`absolute inset-x-4 bottom-4 rounded-2xl px-4 py-4 backdrop-blur-md transition-all duration-500 ${
                      isDark
                        ? "bg-[#111C2B]/90 border border-white/10 shadow-xl shadow-black/40 group-hover:bg-[#111C2B] group-hover:border-blue-400/40"
                        : "bg-white/95 border border-white shadow-xl shadow-black/10 group-hover:bg-white"
                    }`}
                  >
                    <div className="flex min-h-[3.75rem] flex-col items-center justify-center gap-1">
                      {/* الاسم */}
                      <h3
                        title={member.nameAr}
                        style={clamp(1)}
                        className={`text-center text-[17px] font-bold leading-6 transition-colors duration-300 ${
                          isDark
                            ? "text-white group-hover:text-blue-300"
                            : "text-[#0F2647] group-hover:text-blue-700"
                        }`}
                      >
                        {member.nameAr}
                      </h3>

                      {/* التخصص */}
                      <p
                        title={member.specialtyAr}
                        style={clamp(1)}
                        className={`text-center text-[13px] font-medium leading-5 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {member.specialtyAr}
                      </p>
                    </div>

                    {/* خط أزرق بيظهر عند الـ hover */}
                    <div
                      className={`mx-auto mt-2 h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-16 ${
                        activeCard === member.id ? "w-16" : ""
                      } ${isDark ? "bg-blue-400" : "bg-blue-600"}`}
                    />
                  </div>

                  {/* ===== زر عرض الملف ===== */}
                  <div
                    className={`absolute right-4 top-4 translate-y-[-6px] rounded-xl px-3.5 py-2 text-[11px] font-medium opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                      activeCard === member.id ? "translate-y-0 opacity-100" : ""
                    } ${isDark ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}
                  >
                    عرض الملف الشخصي
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Team;