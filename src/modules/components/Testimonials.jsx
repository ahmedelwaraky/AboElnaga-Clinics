import { useCallback, useEffect, useState } from "react";
import { Star, Quote, PenLine, Loader2 } from "lucide-react";
import { useTheme } from "../../core/createContext";
import { Card } from "../../shared/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import { teamMembers } from "../../data/team";
import ReviewFormModal from "../../shared/component/ReviewFormModal";
import { fetchApprovedReviews } from "../../shared/lib/supabase";

const Testimonials = () => {
  const { isDark } = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    const { data } = await fetchApprovedReviews(12);
    setReviews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  // الآراء الحقيقية من Supabase بس
  const items = reviews.map((r) => {
    // اسم الدكتور بيتجاب من team.js عن طريق doctor_id
    const doctor = teamMembers.find((m) => String(m.id) === String(r.doctor_id));
    return {
      key: r.id,
      name: r.name,
      subtitle: doctor?.nameAr?.trim() || "",
      rating: r.rating,
      comment: r.review,
    };
  });

  return (
    <section
      id="testimonials"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark ? "bg-[#1a2332]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20"></div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <Quote
            className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            آراء عملائنا
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6 md:mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            اكتشف تجارب المرضى الذين اختاروا عيادتنا لرعاية أسنانهم
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div
              className={`h-[2px] w-24 md:w-32 rounded-full ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-blue-500 to-blue-500"
                  : "bg-gradient-to-r from-transparent via-blue-600 to-blue-600"
              }`}
            ></div>
            <div
              className={`h-[2px] w-24 md:w-32 rounded-full ${
                isDark
                  ? "bg-gradient-to-l from-transparent via-blue-500 to-blue-500"
                  : "bg-gradient-to-l from-transparent via-blue-600 to-blue-600"
              }`}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-4 md:mt-6">
            <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <div className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
          </div>
        </div>

        {/* Carousel / Loading / Empty */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2
              className={`w-8 h-8 animate-spin ${isDark ? "text-blue-400" : "text-blue-600"}`}
            />
          </div>
        ) : items.length === 0 ? (
          <div
            className={`max-w-2xl mx-auto text-center py-14 px-6 rounded-2xl ${
              isDark
                ? "bg-[#0f1c2e] border border-gray-700/30"
                : "bg-white border border-gray-200 shadow-md"
            }`}
          >
            <Quote
              className={`w-10 h-10 mx-auto mb-4 ${
                isDark ? "text-gray-600" : "text-gray-300"
              }`}
            />
            <p
              className={`text-sm md:text-base ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              لسه مفيش آراء منشورة — كن أول واحد يشاركنا تجربته
            </p>
          </div>
        ) : (
          <Carousel
            autoplay={true}
            autoplayDelay={4000}
            opts={{ align: "start", loop: true, direction: "rtl" }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((item) => (
                <CarouselItem
                  key={item.key}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl h-full transition-all duration-300 ${
                      isDark
                        ? "bg-[#0f1c2e] border border-gray-700/30"
                        : "bg-white border border-gray-200 shadow-md"
                    }`}
                  >
                    {/* Header: Avatar and Name */}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl font-bold ${
                            isDark
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {item.name?.trim()?.charAt(0) || "؟"}
                        </div>
                        <div className="text-right">
                          <h3
                            className={`font-bold text-sm md:text-base ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <p
                            className={`text-[10px] md:text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isDark ? "bg-blue-500/20" : "bg-blue-100"
                        }`}
                      >
                        <Quote
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed text-right ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      "{item.comment}"
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <CarouselNext className="static transform-none" />
              <CarouselPrevious className="static transform-none" />
            </div>
          </Carousel>
        )}

        {/* CTA: اكتب رأيك */}
        <div className="mt-10 md:mt-14 text-center">
          <p className={`text-sm md:text-base mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            جربت العيادة قبل كده؟ شاركنا رأيك
          </p>
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className={`inline-flex items-center gap-2 px-7 md:px-9 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-base text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? "bg-blue-500 hover:bg-blue-400 shadow-blue-500/20"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
            }`}
          >
            <PenLine className="w-4 h-4 md:w-5 md:h-5" />
            اكتب رأيك أو تجربتك مع الدكتور
          </button>
        </div>
      </div>

      <ReviewFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmitted={loadReviews}
      />
    </section>
  );
};

export default Testimonials;