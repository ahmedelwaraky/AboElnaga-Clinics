import { useEffect } from "react";
import { MapPin, X, Clock } from "lucide-react";
import { useTheme } from "../../core/createContext";
import { locations, getWhatsappUrl } from "../../data/branches";

const ClinicSelectionPopup = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  /* الفرع متاح لو عنده رقم واتساب */
  const clinics = locations.map((l) => ({
    ...l,
    available: Boolean(l.phone),
  }));

  /* ESC للإغلاق + قفل سكرول الصفحة */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  const handleClinicClick = (clinic) => {
    if (!clinic.available) return;
    window.open(getWhatsappUrl(clinic), "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="اختر الفرع"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl
                    duration-300 animate-in fade-in zoom-in-95
                    ${isDark ? "bg-[#1a2332]" : "bg-white"}`}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-5">
          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="absolute left-4 top-4 rounded-full bg-white/20 p-1 transition-all hover:bg-white/30
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <h2 className="text-center text-2xl font-bold text-white">اختر الفرع</h2>
          <p className="mt-1 text-center text-sm text-white/90">
            اختر العيادة الأقرب لك لحجز موعد
          </p>
        </div>

        {/* Clinics List */}
        <div className="space-y-3 p-6">
          {clinics.map((clinic) => (
            <button
              key={clinic.id}
              onClick={() => handleClinicClick(clinic)}
              disabled={!clinic.available}
              className={`flex w-full items-center gap-4 rounded-xl p-4 text-right transition-all duration-300
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                          ${
                            clinic.available
                              ? isDark
                                ? "cursor-pointer bg-gray-700/50 hover:scale-[1.03] hover:bg-gray-700"
                                : "cursor-pointer bg-gray-50 hover:scale-[1.03] hover:bg-gray-100"
                              : isDark
                              ? "cursor-not-allowed bg-gray-800/30 opacity-60"
                              : "cursor-not-allowed bg-gray-100/50 opacity-60"
                          }`}
            >
              <div
                className={`rounded-full p-3 ${
                  clinic.available ? "bg-blue-500" : isDark ? "bg-gray-600" : "bg-gray-300"
                }`}
              >
                <MapPin className="h-6 w-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
                  {clinic.nameAr}
                </h3>
                {clinic.available ? (
                  <p
                    className={`mt-0.5 flex items-center gap-1.5 text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    {clinic.hoursAr}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-yellow-500">قريباً</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicSelectionPopup;