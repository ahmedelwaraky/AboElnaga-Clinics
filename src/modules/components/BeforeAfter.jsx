import { useTheme } from "../../core/createContext";
import { cases as defaultCases } from "../../data/before-after";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import SectionHeader from "../../shared/ui/SectionHeader";
import { Sparkles } from "lucide-react";

/**
 * سكشن قبل وبعد — نفس المكون للرئيسية ولصفحة الدكتور
 *
 * الرئيسية:     <BeforeAfter />
 * صفحة الدكتور: <BeforeAfter id="cases" items={doctor.cases} showCaption withNavSpacer={false} onCtaClick={...} />
 */
const BeforeAfter = ({
  items = defaultCases,
  id = "results",
  title = "قصص نجاح وابتسامات",
  subtitle = "اكتشف قوة ابتسامتك الجديدة",
  bgClass,
  withNavSpacer = true, // مسافة الـ Navbar الثابت في الرئيسية
  showCaption = false, // عرض اسم الحالة ونوع الإجراء تحت الصورة
  showCta = true,
  onCtaClick, // لو موجود → زرار يفتح popup بدل لينك #contact
}) => {
  const { isDark } = useTheme();
  if (!items?.length) return null;

  const bg = bgClass ?? (isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]");
  const ctaClass = `inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg text-sm md:text-base text-white ${
    isDark ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
  }`;

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 md:py-20 transition-colors duration-300 overflow-hidden ${bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {withNavSpacer && <div className="h-16 md:h-20" />}
        <SectionHeader title={title} subtitle={subtitle} />

        <Carousel
          autoplay
          autoplayDelay={3000}
          opts={{ align: "start", loop: items.length > 3, direction: "rtl" }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((caseItem, index) => (
              <CarouselItem
                key={caseItem.id ?? index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                    isDark
                      ? "bg-[#243447] border border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white border border-gray-200 hover:border-blue-400/50 shadow-md"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10"
                        : "bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/10"
                    }`}
                  />

                  <div className="relative w-full overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.titleAr}
                      className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isDark
                          ? "bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"
                          : "bg-gradient-to-t from-white/90 via-white/20 to-transparent"
                      }`}
                    />
                    <div
                      className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 text-white ${
                        isDark ? "bg-blue-500/90" : "bg-blue-600/90"
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      قبل وبعد
                    </div>
                  </div>

                  {showCaption && (
                    <div className="relative px-4 py-3 text-right">
                      <h3 className={`text-sm md:text-base font-bold ${isDark ? "text-white" : "text-[#0F2647]"}`}>
                        {caseItem.titleAr}
                      </h3>
                      {caseItem.procedureAr && (
                        <p className={`text-xs mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          {caseItem.procedureAr}
                        </p>
                      )}
                    </div>
                  )}

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent to-transparent ${
                      isDark ? "via-blue-500" : "via-blue-600"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {showCta && (
          <div className="mt-10 md:mt-12 text-center">
            <p className={`mb-3 md:mb-4 text-base md:text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              هل تريد نفس النتائج؟
            </p>
            {onCtaClick ? (
              <button type="button" onClick={onCtaClick} className={ctaClass}>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                احجز استشارة مجانية
              </button>
            ) : (
              <a href="#contact" className={ctaClass}>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                احجز استشارة مجانية
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BeforeAfter;