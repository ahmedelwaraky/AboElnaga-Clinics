import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../core/createContext";
import { services } from "../../data/services";

const Services = () => {
  const { isDark } = useTheme();
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // لو المستخدم مفعّل تقليل الحركة → اعرض الكروت على طول
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleCards(services.map((_, i) => i));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        obs.unobserve(entry.target); // مرة واحدة بس — مفيش تكرار

        services.forEach((_, index) => {
          const timer = setTimeout(() => {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }, index * 120);
          timersRef.current.push(timer);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`overflow-hidden py-16 transition-colors duration-300 md:py-20 ${
        isDark ? "bg-[#1a2332]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20" />

        {/* ===== العنوان ===== */}
        <div className="mb-10 text-center md:mb-16">
          <h2
            className={`mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            خدماتنا لطب الأسنان
          </h2>
          <p
            className={`mx-auto mb-6 max-w-2xl px-4 text-sm sm:text-base md:mb-8 md:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            رعاية أسنان شاملة بأحدث التقنيات وخطط علاج شخصية
          </p>

          {/* الفاصل الزخرفي */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div
              className={`h-[2px] w-24 rounded-full md:w-32 ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-blue-500 to-blue-500"
                  : "bg-gradient-to-r from-transparent via-blue-600 to-blue-600"
              }`}
            />
            <div
              className={`h-[2px] w-24 rounded-full md:w-32 ${
                isDark
                  ? "bg-gradient-to-l from-transparent via-blue-500 to-blue-500"
                  : "bg-gradient-to-l from-transparent via-blue-600 to-blue-600"
              }`}
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 md:mt-6">
            <div className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`} />
            <div className={`h-2 w-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`} />
            <div className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`} />
          </div>
        </div>

        {/* ===== شبكة الخدمات ===== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            /* على الموبايل: حركة رأسية (مفيش overflow أفقي)
               من sm فأعلى: حركة أفقية متبادلة */
            const animationClass = isVisible
              ? "translate-x-0 translate-y-0 opacity-100"
              : isEven
                ? "translate-y-8 opacity-0 sm:translate-x-16 sm:translate-y-0"
                : "translate-y-8 opacity-0 sm:-translate-x-16 sm:translate-y-0";

            return (
              <div
                key={service.id ?? index}
                className={`rounded-xl p-5 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl md:rounded-2xl md:p-6 ${animationClass} ${
                  isDark
                    ? "border border-gray-700/50 bg-[#243447] hover:border-blue-500/50"
                    : "border border-gray-200 bg-white shadow-md hover:border-blue-400/50"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 md:mb-4 md:h-14 md:w-14 md:rounded-xl ${
                    isVisible ? "rotate-0 scale-100" : "rotate-180 scale-0"
                  } ${isDark ? "bg-blue-500/20" : "bg-blue-100"}`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <IconComponent
                    className={`h-6 w-6 md:h-7 md:w-7 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>

                <h3
                  className={`mb-2 text-right text-lg font-bold md:mb-3 md:text-xl ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.titleAr}
                </h3>

                <p
                  className={`text-right text-xs leading-relaxed sm:text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.descriptionAr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;