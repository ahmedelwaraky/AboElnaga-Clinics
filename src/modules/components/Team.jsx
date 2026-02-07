import { useTheme } from "../../core/createContext";
import  {teamMembers}  from "../../data/team";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../shared/ui/Carousel";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctor-details/${doctorId}`);
  };

  return (
    <section
      id="team"
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"
      } overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-20"></div>

        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            تعرف على فريقنا المتخصص
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            محترفون ملتزمون بصحتك وراحتك في طب الأسنان
          </p>
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
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div
                  onClick={() => handleDoctorClick(member.id)}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                    isDark
                      ? "bg-[#192231] border border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white border border-gray-200 hover:border-blue-400/50 shadow-md"
                  }`}
                >
                  {/* Background Pattern on Hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10"
                        : "bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/10"
                    }`}
                  />

                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden bg-white">
                    {/* Doctor Image */}
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
                      {/* Decorative circles */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 ${
                          isDark ? "bg-white/10" : "bg-white/10"
                        }`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12 ${
                          isDark ? "bg-white/10" : "bg-white/10"
                        }`}
                      />

                      <div
                        className={`relative z-10 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 ${
                          isDark ? "bg-white" : "bg-white"
                        }`}
                      >
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
                        isDark
                          ? "bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                          : "bg-gradient-to-t from-white/80 via-transparent to-transparent"
                      }`}
                    />

                    {/* View Profile Badge */}
                    <div
                      className={`absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-xl text-xs font-light ${
                        isDark
                          ? "bg-blue-500 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      عرض الملف الشخصي
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4">
                    {/* Name & Role */}
                    <div className="text-center space-y-2">
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isDark
                            ? "text-blue-400 group-hover:text-blue-300"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {member.nameAr}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        {member.roleAr}
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className={`h-px bg-gradient-to-r from-transparent to-transparent ${
                        isDark ? "via-blue-500/30" : "via-gray-200"
                      }`}
                    />
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
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