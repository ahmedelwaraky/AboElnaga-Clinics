import { Smile, Sparkles, Shield, Zap, Activity, Star } from "lucide-react";
import { useTheme } from "../../core/createContext";
import  {services}  from "../../data/services";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const { isDark } = useTheme();
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show cards one by one with delay
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150); // 150ms delay between each card
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-[#1a2332]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-20"></div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            خدماتنا لطب الأسنان
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            رعاية أسنان شاملة بأحدث التقنيات وخطط علاج شخصية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            // Alternate between right and left
            const isEven = index % 2 === 0;
            const animationClass = isVisible
              ? "translate-x-0 opacity-100"
              : isEven
              ? "translate-x-20 opacity-0"
              : "-translate-x-20 opacity-0";

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl ${animationClass} ${
                  isDark
                    ? "bg-[#243447] border border-gray-700/50 hover:border-blue-500/50"
                    : "bg-white border border-gray-200 hover:border-blue-400/50 shadow-md"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                  } ${isDark ? "bg-blue-500/20" : "bg-blue-100"}`}
                  style={{
                    transitionDelay: `${index * 50 + 200}ms`,
                  }}
                >
                  <IconComponent
                    className={`w-7 h-7 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 text-right ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.titleAr}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed text-right ${
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