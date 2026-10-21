import { useEffect, useRef, useState } from "react";
import MainLogo from "../../assets/images/main/MainLogo.png";
import All from "../../assets/images/doctors/All-Doctors.png";

// ألوان الهوية — غيّرها من هنا (والـ hex نفسها مستخدمة في كلاسات Tailwind تحت)
// primary   #2C5F8D  |  secondary #4A90E2  |  sky #87CEEB  |  gold #FDB913  |  deep #0B2239
const BRAND = {
  primary: "#2C5F8D",
  secondary: "#4A90E2",
  sky: "#87CEEB",
  gold: "#FDB913",
};

const RING_RADIUS = 92;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

// تحميل صورة الخلفية مبكراً (بمجرد ما الملف يتحمّل) بدل ما ننتظر ظهور الـ <img>
if (typeof window !== "undefined") {
  const preload = new Image();
  preload.decoding = "async";
  preload.src = All;
}

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);

  // لو الصورة متخزنة في الكاش وجاهزة قبل ما الـ onLoad يشتغل
  useEffect(() => {
    if (imgRef.current?.complete) setImgLoaded(true);
  }, []);

  // نحتفظ بآخر نسخة من onComplete عشان الـ effect ميتعاد تشغيله
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // ظهور تدريجي عند الفتح
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // التقدم
  // التقدم
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 1)); // ← الحد 100 والزيادة 1
    }, 40); // ← الفاصل
    return () => clearInterval(interval);
  }, []);

  // الخروج بعد الوصول لـ 100%
  useEffect(() => {
    if (progress < 100) return undefined;
    const fadeTimer = setTimeout(() => setLeaving(true), 300);
    const doneTimer = setTimeout(() => onCompleteRef.current?.(), 800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [progress]);

  const dashOffset = RING_CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="جاري تحميل الموقع"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B2239] via-[#2C5F8D] to-[#0B2239] transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* صورة الخلفية */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          ref={imgRef}
          src={All}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
          className={`h-full w-full object-cover object-top transition-all duration-1000 ease-out ${
            imgLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        {/* طبقة لونية بألوان الهوية عشان النص يفضل واضح */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2239]/85 via-[#2C5F8D]/70 to-[#0B2239]/90" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2C5F8D] via-[#4A90E2] to-[#FDB913]" />
      </div>

      {/* المحتوى */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* اللوجو داخل حلقة التقدم */}
        <div
          className="relative h-44 w-44 md:h-60 md:w-60"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <defs>
              <linearGradient
                id="loading-ring-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={BRAND.sky} />
                <stop offset="100%" stopColor={BRAND.gold} />
              </linearGradient>
            </defs>
            {/* المسار الخلفي */}
            <circle
              cx="100"
              cy="100"
              r={RING_RADIUS}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.25"
              strokeWidth="5"
            />
            {/* التقدم */}
            <circle
              cx="100"
              cy="100"
              r={RING_RADIUS}
              fill="none"
              stroke="url(#loading-ring-gradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>

          <div className="absolute inset-[14%] flex items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/40">
            <img
              src={MainLogo}
              alt="شعار عيادات أبو النجا"
              className="h-3/5 w-3/5 object-contain"
            />
          </div>
        </div>

        {/* النص */}
        <div className="mt-8 space-y-2 md:mt-10 md:space-y-3">
          <h1 className="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-4xl">
            عيادات أبو النجا
          </h1>
          <div className="mx-auto h-0.5 w-12 rounded-full bg-[#FDB913]" />
          <p className="text-sm font-medium text-[#87CEEB] md:text-lg">
            لتقويم وزراعة الأسنان
          </p>
          <p
            dir="ltr"
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70 md:text-xs"
          >
            Abo Elnaga Dental Clinics
          </p>
        </div>

        {/* النسبة */}
        <p
          dir="ltr"
          className="mt-6 text-sm font-semibold tabular-nums text-white/85 md:mt-8"
        >
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Loading;
