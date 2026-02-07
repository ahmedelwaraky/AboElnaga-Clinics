import { useTheme } from "../../core/createContext";
import  {cases}  from "../../data/before-after";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import { Sparkles } from "lucide-react";

const BeforeAfter = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="results"
      className={`py-20 transition-colors duration-300 overflow-hidden ${
        isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-20"></div>

        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            قصص نجاح وابتسامات
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            اكتشف قوة ابتسامتك الجديدة
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الكاروسيل */}
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
            {cases.map((caseItem, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                      isDark
                        ? "bg-[#243447] border border-gray-700/50 hover:border-blue-500/50"
                        : "bg-white border border-gray-200 hover:border-blue-400/50 shadow-md"
                    }`}
                  >
                    {/* Background Pattern */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isDark
                          ? "bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10"
                          : "bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/10"
                      }`}
                    />

                    {/* Image Section */}
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.titleAr}
                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          isDark
                            ? "bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"
                            : "bg-gradient-to-t from-white/90 via-white/20 to-transparent"
                        }`}
                      />

                      {/* Before/After Badge */}
                      <div
                        className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 ${
                          isDark
                            ? "bg-blue-500/90 text-white"
                            : "bg-blue-600/90 text-white"
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        قبل وبعد
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                        isDark
                          ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                          : "bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                      }`}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* دعوة للحجز */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center">
          <p
            className={`mb-4 text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            هل تريد نفس النتائج؟
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg ${
              isDark
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            احجز استشارة مجانية
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
