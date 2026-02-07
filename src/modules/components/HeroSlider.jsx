import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slider } from "../../Data/slider";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showClinicPopup, setShowClinicPopup] = useState(false);

  // Auto play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Handle booking button click
  const handleBookingClick = () => {
    setShowClinicPopup(true);
  };

  // Handle learn more button click
  const handleLearnMoreClick = () => {
    window.open("https://wa.me/201227599182", "_blank");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images - يتحرك */}
      <div className="absolute inset-0 w-full h-full">
        {slider.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/90 via-blue-400/70 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content - ثابت */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-right max-w-3xl mr-auto">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {slider[currentSlide].titleAr}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed">
              {slider[currentSlide].subtitleAr}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-start items-center">
              {/* زرار احجز موعد - أزرق */}
              <button
                onClick={handleBookingClick}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                احجز موعد
              </button>

              {/* زرار اعرف المزيد - أصفر */}
              <button
                onClick={handleLearnMoreClick}
                className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 transition-transform group-hover:-translate-x-1" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? "w-10 h-3 bg-yellow-500"
                : "w-3 h-3 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Clinic Selection Popup */}
      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </div>
  );
};

export default HeroSlider;