import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Headphones,
  Navigation,
  LocateFixed,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import WhatsAppIcon from "../../shared/ui/icons/WhatsAppIcon";
import {
  locations,
  getDirectionsUrl,
  getWhatsappUrl,
  distanceKm,
  isBranchOpen,
} from "../../data/branches";

const Locations = () => {
  const { isDark } = useTheme();

  const [active, setActive] = useState(0);
  const [nearest, setNearest] = useState(null); // { index, km }
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState("");

  const branch = locations[active];
  const isOpen = isBranchOpen(branch); // مواعيد الجمعة بتختلف من فرع لفرع

  const findNearest = () => {
    if (!navigator.geolocation) {
      setGeoError("المتصفح مش بيدعم تحديد الموقع");
      return;
    }
    setLocating(true);
    setGeoError("");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        let best = { index: 0, km: Infinity };
        locations.forEach((l, i) => {
          const km = distanceKm(
            coords.latitude,
            coords.longitude,
            l.lat,
            l.lng,
          );
          if (km < best.km) best = { index: i, km };
        });
        setNearest(best);
        setActive(best.index);
        setLocating(false);
      },
      (err) => {
        setLocating(false);
        setGeoError(
          err.code === 1
            ? "لازم تسمح بالوصول للموقع من إعدادات المتصفح"
            : "معرفناش نحدد موقعك، جرّب تاني",
        );
      },
      { timeout: 8000, enableHighAccuracy: true },
    );
  };

  /* ── ألوان الوضعين في مكان واحد ── */
  const t = {
    section: isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]",
    panel: isDark
      ? "bg-[#243447] border-gray-700/60"
      : "bg-white border-gray-200",
    title: isDark ? "text-white" : "text-gray-800",
    body: isDark ? "text-gray-300" : "text-gray-600",
    muted: isDark ? "text-gray-400" : "text-gray-500",
    accent: isDark ? "text-blue-400" : "text-blue-600",
    chipIdle: isDark
      ? "bg-[#243447] text-gray-300 border-gray-700/60 hover:border-blue-500/60"
      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400/60",
    chipActive: isDark
      ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25"
      : "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25",
    row: isDark ? "bg-white/[0.04]" : "bg-gray-50",
    divider: isDark ? "border-white/10" : "border-gray-200",
  };

  const InfoRow = ({ icon: Icon, children }) => (
    <div className={`flex items-start gap-3 rounded-xl p-3 ${t.row}`}>
      <Icon className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${t.accent}`} />
      <div className={`min-w-0 text-sm leading-relaxed ${t.body}`}>
        {children}
      </div>
    </div>
  );

  return (
    <section
      id="locations"
      className={`overflow-hidden py-16 transition-colors duration-300 md:py-20 ${t.section}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20" />

        {/* ===== العنوان ===== */}
        <div className="mb-10 text-center md:mb-14">
          <h2
            className={`mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ${t.title}`}
          >
            فروعنا المريحة
          </h2>
          <p
            className={`mx-auto max-w-2xl px-4 text-sm sm:text-base md:text-lg ${t.body}`}
          >
            اختار الفرع الأقرب ليك وشوفه على الخريطة قبل ما تيجي
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span
              className={`h-[2px] w-20 rounded-full md:w-28 ${
                isDark
                  ? "bg-gradient-to-r from-transparent to-blue-400"
                  : "bg-gradient-to-r from-transparent to-blue-500"
              }`}
            />
            <span
              className={`h-2 w-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
            />
            <span
              className={`h-[2px] w-20 rounded-full md:w-28 ${
                isDark
                  ? "bg-gradient-to-l from-transparent to-blue-400"
                  : "bg-gradient-to-l from-transparent to-blue-500"
              }`}
            />
          </div>
        </div>

        {/* ===== أزرار الفروع ===== */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {locations.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                          ${active === i ? t.chipActive : t.chipIdle}`}
            >
              {l.cityAr}
              {nearest?.index === i && (
                <span className="mr-2 text-[11px] opacity-80">
                  ·{" "}
                  {nearest.km < 1 ? "أقل من كم" : `${nearest.km.toFixed(1)} كم`}
                </span>
              )}
            </button>
          ))}

          <button
            onClick={findNearest}
            disabled={locating}
            className={`inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2.5 text-sm font-semibold
                        transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                        focus-visible:ring-offset-2 disabled:opacity-60
                        ${
                          isDark
                            ? "border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                            : "border-blue-500/50 text-blue-600 hover:bg-blue-500/10"
                        }`}
          >
            <LocateFixed
              className={`h-4 w-4 ${locating ? "animate-spin" : ""}`}
            />
            {locating ? "بندوّر..." : "أقرب فرع ليّا"}
          </button>
        </div>

        {/* رسالة خطأ تحديد الموقع */}
        {geoError && (
          <p
            className="mb-4 text-center text-xs font-medium text-red-500"
            role="status"
          >
            {geoError}
          </p>
        )}

        {/* ===== البانل ===== */}
        <div
          className={`overflow-hidden rounded-2xl border shadow-xl transition-colors duration-300 ${t.panel}`}
        >
          <div className="grid lg:grid-cols-5">
            {/* الخريطة */}
            <div className="relative h-64 sm:h-80 lg:col-span-3 lg:h-[26rem]">
              <iframe
                key={branch.id}
                src={branch.map}
                title={branch.nameAr}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
              <span
                className={`pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full
                            px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md
                            ${isOpen ? "bg-emerald-500/95" : "bg-gray-700/90"}`}
              >
                <span
                  className={`h-2 w-2 rounded-full bg-white ${
                    isOpen ? "animate-pulse" : "opacity-60"
                  }`}
                />
                {isOpen ? "مفتوح الآن" : "مغلق الآن"}
              </span>
            </div>

            {/* التفاصيل */}
            <div className="flex flex-col p-5 sm:p-7 lg:col-span-2">
              <h3
                className={`flex items-center gap-2 text-xl font-bold md:text-2xl ${t.title}`}
              >
                <MapPin className={`h-5 w-5 shrink-0 ${t.accent}`} />
                {branch.nameAr}
              </h3>

              <div className="mt-5 flex-1 space-y-2.5">
                <InfoRow icon={MapPin}>{branch.addressAr}</InfoRow>

                {/* المواعيد: أيام الأسبوع + الجمعة */}
                <InfoRow icon={Clock}>
                  <span className="block">{branch.hoursAr}</span>
                  <span className={`mt-1.5 block border-t pt-1.5 ${t.divider}`}>
                    {branch.fridayAr}
                  </span>
                </InfoRow>

                <InfoRow icon={Phone}>
                  <a
                    href={`tel:${branch.phone}`}
                    dir="ltr"
                    className={`font-semibold hover:underline ${t.accent}`}
                  >
                    {branch.phone}
                  </a>
                </InfoRow>

                {branch.tel && (
                  <InfoRow icon={Headphones}>
                    <a
                      href={`tel:${branch.tel}`}
                      dir="ltr"
                      className={`font-semibold hover:underline ${t.accent}`}
                    >
                      {branch.tel}
                    </a>
                  </InfoRow>
                )}
              </div>

              <div className="mt-6 space-y-2.5">
                {/* ===== زر واتساب بالأيقونة الرسمية ===== */}
                <a
                  href={getWhatsappUrl(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm
                             font-bold text-white transition-all hover:bg-[#1EB855] focus-visible:outline-none
                             focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
                  احجز عبر واتساب
                </a>
                <a
                  href={getDirectionsUrl(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold
                              transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                              focus-visible:ring-offset-2
                              ${
                                isDark
                                  ? "border-blue-400/40 text-blue-400 hover:bg-blue-400/10"
                                  : "border-blue-500/40 text-blue-600 hover:bg-blue-500/10"
                              }`}
                >
                  <Navigation className="h-4 w-4 shrink-0" />
                  احصل على الاتجاهات
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className={`mt-5 text-center text-xs ${t.muted}`}>
          {locations.length} فروع في محافظة المنوفية · مفتوحين طول أيام الأسبوع
        </p>
      </div>
    </section>
  );
};

export default Locations;
