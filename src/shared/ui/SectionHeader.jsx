import { useTheme } from "../../core/createContext";

/**
 * عنوان سكشن موحّد (عنوان + وصف + فاصل زخرفي)
 * كان متكرر حرفياً في BeforeAfter و ReelsVideos و Testimonials
 */
const SectionHeader = ({ title, subtitle, icon: Icon, className = "" }) => {
  const { isDark } = useTheme();
  const accent = isDark ? "bg-blue-400" : "bg-blue-500";
  const lineVia = isDark ? "via-blue-400 to-blue-400" : "via-blue-500 to-blue-500";

  return (
    <div className={`text-center mb-10 md:mb-14 ${className}`}>
      {Icon && (
        <Icon
          className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        />
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6 md:mb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-3 md:gap-4">
        <div className={`h-[2px] w-24 md:w-32 rounded-full bg-gradient-to-r from-transparent ${lineVia}`} />
        <div className={`h-[2px] w-24 md:w-32 rounded-full bg-gradient-to-l from-transparent ${lineVia}`} />
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4 md:mt-6">
        <div className={`w-1.5 h-1.5 rounded-full ${accent}`} />
        <div className={`w-2 h-2 rounded-full ${accent}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${accent}`} />
      </div>
    </div>
  );
};

export default SectionHeader;