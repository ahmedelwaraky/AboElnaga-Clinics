import { useState, useEffect } from "react";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";
import WhatsAppIcon from "../../shared/ui/icons/WhatsAppIcon";

const WhatsAppButton = () => {
  const [showClinicPopup, setShowClinicPopup] = useState(false);
  const [visible, setVisible] = useState(false);

  /* الزر يظهر بعد ما المستخدم يسكرول شوية — مش من أول ثانية */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatWhatsapp {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes pulseRingWa {
          0%   { transform: scale(1);   opacity: .55; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .wa-float { animation: floatWhatsapp 3s ease-in-out infinite; }
        .wa-ring  { animation: pulseRingWa 2.2s cubic-bezier(0.4,0,0.6,1) infinite; }

        @media (prefers-reduced-motion: reduce) {
          .wa-float, .wa-ring { animation: none !important; }
          .wa-ring { display: none; }
        }
      `}</style>

      <div
        dir="rtl"
        className={`fixed bottom-4 left-4 z-50 transition-all duration-500 md:bottom-6 md:left-6 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
        style={{
          bottom: "max(1rem, env(safe-area-inset-bottom))", // iPhone home indicator
        }}
      >
        <div className="wa-float group relative">
          {/* حلقة نابضة خلف الزر */}
          <span className="wa-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]" />

          <button
            onClick={() => setShowClinicPopup(true)}
            aria-label="احجز موعدك عبر واتساب"
            className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full
                       bg-[#25D366] text-white shadow-lg transition-all duration-300
                       hover:scale-110 hover:bg-[#20BA5A] hover:shadow-2xl active:scale-95
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40
                       md:h-16 md:w-16"
          >
            <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
          </button>

          {/* تولتيب — ديسكتوب فقط */}
          <span
            className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2
                       whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white
                       opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 md:block"
          >
            احجز موعدك الآن
            <span className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
          </span>
        </div>
      </div>

      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </>
  );
};

export default WhatsAppButton;