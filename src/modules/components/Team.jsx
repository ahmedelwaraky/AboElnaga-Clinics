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
          {/* items-stretch = كل الكروت تاخد نفس الارتفاع */}
          <CarouselContent className="-ml-4 items-stretch">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4 h-auto"
              >
                <div
                  onClick={() => handleDoctorClick(member.id)}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                    activeCard === member.id ? "ring-2 ring-blue-500" : ""
                  } ${
                    isDark
                      ? "bg-[#192231] border border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white border border-gray-200 hover:border-blue-400/50 shadow-md"
                  }`}
                >
                  {/* Background Pattern on Hover */}
                  <div
                    className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      activeCard === member.id ? "opacity-100" : ""
                    } ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10"
                        : "bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/10"
                    }`}
                  />

                  {/* Image Section - ارتفاع ثابت لا يتغير */}
                  <div className="relative h-72 shrink-0 overflow-hidden bg-white">
                    <img
                      src={member.img}
                      alt={member.nameAr}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target;
                        target.style.display = "none";
                        if (target.nextElementSibling) {
                          target.nextElementSibling.style.display = "flex";
                        }
                      }}
                    />

                    {/* Fallback: Initials Circle (hidden by default) */}
                    <div
                      className={`absolute inset-0 items-center justify-center hidden ${
                        isDark
                          ? "bg-gradient-to-br from-blue-500/90 to-blue-500/60"
                          : "bg-gradient-to-br from-blue-600/90 to-blue-600/60"
                      }`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 bg-white/10" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12 bg-white/10" />

                      <div className="relative z-10 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl bg-white transform group-hover:scale-110 transition-transform duration-500">
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

                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        activeCard === member.id ? "opacity-100" : ""
                      } ${
                        isDark
                          ? "bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                          : "bg-gradient-to-t from-white/80 via-transparent to-transparent"
                      }`}
                    />

                    {/* View Profile Badge */}
                    <div
                      className={`absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-xl text-xs font-light whitespace-nowrap ${
                        activeCard === member.id
                          ? "opacity-100 translate-y-0"
                          : ""
                      } ${isDark ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}
                    >
                      عرض الملف الشخصي
                    </div>
                  </div>

                                   {/* Content Section - يملأ الباقي بالتساوي */}
                  <div className="relative flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col items-center gap-1.5">
                      {/* الاسم: سطرين كحد أقصى بارتفاع ثابت */}
                      <h3
                        title={member.nameAr}
                        style={clamp(2)}
                        className={`min-h-[3 rem] text-center text-lg sm:text-xl font-bold leading-[1.625rem] transition-colors duration-300 ${
                          isDark
                            ? "text-blue-400 group-hover:text-blue-300"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {member.nameAr}
                      </h3>

                      {/* التخصص: Badge بخلفية وبوردر مميزين */}
                      <div className="flex min-h-[2.75rem] w-full items-center justify-center ">
                        <span
                          title={member.specialtyAr}
                          className={`inline-flex max-w-full items-center gap-2 rounded-xl border px-3.5 py-1.5 text-[13px] font-medium leading-[1.375rem] backdrop-blur-sm transition-all duration-300 ${
                            isDark
                              ? "border-blue-400/30 bg-blue-400/10 text-blue-200 group-hover:border-blue-400/60 group-hover:bg-blue-400/20 group-hover:text-blue-100"
                              : "border-blue-200 bg-blue-50 text-blue-700 group-hover:border-blue-400 group-hover:bg-blue-100 group-hover:text-blue-800"
                          }`}
                        >
                          {/* نقطة مؤشر */}
                          {/* <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              isDark ? "bg-blue-300" : "bg-blue-500"
                            }`}
                          /> */}
                          <span style={clamp(2)} className="text-center">
                            {member.specialtyAr}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className={`mt-4 h-px bg-gradient-to-r from-transparent to-transparent ${
                        isDark ? "via-blue-500/30" : "via-gray-200"
                      }`}
                    />
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`h-1 shrink-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                      activeCard === member.id ? "scale-x-100" : ""
                    } ${
                      isDark
                        ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        : "bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                    }`}
                  />
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
