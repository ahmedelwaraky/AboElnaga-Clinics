import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";
import { heroSliders } from "../../data/heroSliders";

const AUTOPLAY_MS = 5000;
const RESUME_MS = 8000; // بعد تفاعل المستخدم، الأوتوبلاي بيرجع

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showClinicPopup, setShowClinicPopup] = useState(false);
  const resumeTimer = useRef(null);

  /* ===== الأوتوبلاي ===== */
  useEffect(() => {
    if (!isAutoPlaying || heroSliders.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliders.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [isAutoPlaying]);

  /* يوقف الأوتوبلاي مؤقتاً ويرجّعه بعد فترة */
  const pauseAutoplay = useCallback(() => {
    setIsAutoPlaying(false);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsAutoPlaying(true), RESUME_MS);
  }, []);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSliders.length);
    pauseAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSliders.length) % heroSliders.length);
    pauseAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoplay();
  };

  const handleBookingClick = () => setShowClinicPopup(true);
  const handleLearnMoreClick = () =>
    window.open("https://wa.me/201227599182", "_blank", "noopener,noreferrer");

  const slide = heroSliders[currentSlide];

  return (
    <section dir="rtl" className="hero-shell relative w-full overflow-hidden">
      {/* ===== ارتفاع الهيرو: الشاشة ناقص النافبار ===== */}
      <style>{`
        .hero-shell {
          --nav-h: 4rem;                          /* h-16 */
          height: calc(100vh - var(--nav-h));     /* fallback */
          height: calc(100svh - var(--nav-h));    /* الحديث */
          min-height: 420px;
        }
        @media (min-width: 640px) {
          .hero-shell { --nav-h: 5rem; }          /* sm:h-20 */
        }
        /* شاشات قصيرة جداً (لاندسكيب موبايل) */
        @media (max-height: 500px) {
          .hero-shell { min-height: 340px; }
        }
      `}</style>

      {/* ===== خلفيات السلايدر ===== */}
      <div className="absolute inset-0">
        {heroSliders.map((s, index) => (
          <div
            key={index}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* تدرّج أزرق — أقوى على الموبايل عشان النص يبان */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/95 via-blue-500/80 to-blue-900/40 sm:from-blue-600/90 sm:via-blue-400/70 sm:to-transparent" />
          </div>
        ))}
      </div>

      {/* ===== الطبقة الرئيسية: عمود Flex يضمن إن كل حاجة تدخل ===== */}
      <div className="relative z-10 flex h-full flex-col">
        {/* المحتوى */}
        <div className="flex min-h-0 flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="mr-auto max-w-3xl text-right">
              <h1
                className="mb-2 font-bold leading-tight text-white sm:mb-4"
                style={{ fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)" }}
              >
                {slide.titleAr}
              </h1>

              <p
                className="mb-5 leading-relaxed text-white/95 sm:mb-8 md:mb-10"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1.25rem)" }}
              >
                {slide.subtitleAr}
              </p>

              <div className="flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center md:gap-4">
                <button
                  onClick={handleBookingClick}
                  className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                >
                  احجز موعد
                </button>

                <button
                  onClick={handleLearnMoreClick}
                  className="cursor-pointer rounded-lg bg-yellow-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-600 active:scale-95 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
                >
                  اعرف المزيد
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== النقط: جزء من الـ flow مش absolute → عمرها ما تتقص ===== */}
        <div className="flex shrink-0 items-center justify-center gap-2 pb-5 sm:pb-8 md:gap-3 md:pb-12">
          {heroSliders.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`الشريحة ${index + 1}`}
              aria-current={index === currentSlide}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "h-2.5 w-8 bg-yellow-500 md:h-3 md:w-10"
                  : "h-2.5 w-2.5 bg-white/60 hover:bg-white/90 md:h-3 md:w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== أسهم التنقّل (ديسكتوب) ===== */}
      <button
        onClick={prevSlide}
        aria-label="السابق"
        className="group absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95 md:block lg:left-8"
      >
        <ChevronLeft className="h-7 w-7 transition-transform group-hover:-translate-x-1 lg:h-8 lg:w-8" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="التالي"
        className="group absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95 md:block lg:right-8"
      >
        <ChevronRight className="h-7 w-7 transition-transform group-hover:translate-x-1 lg:h-8 lg:w-8" />
      </button>

      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </section>
  );
};

export default HeroSlider;