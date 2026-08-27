import { useEffect, useRef, useState } from "react";
import {
  X,
  Star,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import { teamMembers } from "../../data/team";
import { submitReview } from "../lib/supabase";

const RATING_LABELS = {
  1: "سيئ",
  2: "مقبول",
  3: "جيد",
  4: "جيد جدًا",
  5: "ممتاز",
};

/* ============================================
   قائمة اختيار الدكتور
   موبايل → bottom sheet | ديسكتوب → dropdown
   ============================================ */
const DoctorSelect = ({ value, onChange, isDark, hasError }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const listRef = useRef(null);

  const selected = teamMembers.find((m) => String(m.id) === String(value));

  // قفل بالضغط برّه (pointerdown بيشتغل على اللمس والماوس)
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // تمرير القائمة للعنصر المختار عند الفتح
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      listRef.current
        ?.querySelector("[data-selected='true']")
        ?.scrollIntoView({ block: "center" });
    }, 50);
    return () => clearTimeout(t);
  }, [open]);

  const optionRow = (member) => {
    const isActive = String(member.id) === String(value);
    return (
      <button
        key={member.id}
        type="button"
        role="option"
        aria-selected={isActive}
        data-selected={isActive}
        onClick={() => {
          onChange(String(member.id));
          setOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-2.5 text-right transition-colors ${
          isActive
            ? isDark
              ? "bg-blue-500/15"
              : "bg-blue-50"
            : isDark
            ? "active:bg-white/10 hover:bg-white/5"
            : "active:bg-gray-100 hover:bg-gray-50"
        }`}
      >
        <img
          src={member.img}
          alt=""
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0"
        />
        <span className="flex-1 min-w-0">
          <span
            className={`block text-sm font-semibold truncate ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {member.nameAr.trim()}
          </span>
          <span
            className={`block text-[11px] truncate ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {member.specialtyAr}
          </span>
        </span>
        {isActive && (
          <Check
            className={`w-5 h-5 flex-shrink-0 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          />
        )}
      </button>
    );
  };

  return (
    <div ref={wrapRef} className="relative">
      {/* الزرار */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-right border transition-colors duration-200 ${
          isDark
            ? "bg-[#0f1c2e] border-gray-700/60 text-white hover:border-gray-600"
            : "bg-white border-gray-200 text-gray-800 hover:border-gray-300"
        } ${
          hasError
            ? "border-red-500"
            : open
            ? isDark
              ? "border-blue-400"
              : "border-blue-600"
            : ""
        }`}
      >
        {selected ? (
          <>
            <img
              src={selected.img}
              alt=""
              className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0"
            />
            <span className="flex-1 min-w-0 text-right">
              <span className="block text-sm font-semibold truncate">
                {selected.nameAr.trim()}
              </span>
              <span
                className={`block text-[11px] truncate ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {selected.specialtyAr}
              </span>
            </span>
          </>
        ) : (
          <span
            className={`flex-1 py-1 text-sm ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            اختر الدكتور
          </span>
        )}

        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          } ${isDark ? "text-gray-400" : "text-gray-500"}`}
        />
      </button>

      {open && (
        <>
          {/* خلفية معتمة — موبايل بس */}
          <div className="fixed inset-0 z-[105] bg-black/40 sm:hidden" />

          {/* موبايل: bottom sheet | ديسكتوب: dropdown */}
          <div
            ref={listRef}
            role="listbox"
            dir="rtl"
            className={`
              fixed inset-x-0 bottom-0 z-[110] max-h-[65vh] overflow-y-auto
              rounded-t-2xl border-t shadow-2xl
              sm:absolute sm:inset-x-auto sm:bottom-auto sm:z-20 sm:w-full sm:mt-1.5
              sm:max-h-64 sm:rounded-xl sm:border sm:shadow-xl
              ${
                isDark
                  ? "bg-[#0f1c2e] border-gray-700/60"
                  : "bg-white border-gray-200"
              }
            `}
          >
            {/* هيدر الشيت — موبايل بس */}
            <div
              className={`sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b sm:hidden ${
                isDark
                  ? "bg-[#0f1c2e] border-gray-700/60"
                  : "bg-white border-gray-200"
              }`}
            >
              <span
                className={`text-sm font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                اختر الدكتور
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="إغلاق"
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark
                    ? "bg-white/5 text-gray-300"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {teamMembers.map(optionRow)}

            {/* مساحة أمان لشريط الموبايل السفلي */}
            <div className="h-4 sm:hidden" />
          </div>
        </>
      )}
    </div>
  );
};

/* ============================================
   المودال
   ============================================ */
const ReviewFormModal = ({ open, onClose, onSubmitted }) => {
  const { isDark } = useTheme();
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  const [form, setForm] = useState({ name: "", doctorId: "", comment: "" });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  // قفل بالـ Escape + منع تمرير الصفحة ورا المودال
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // إعادة ضبط الفورم بعد كل قفل
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setForm({ name: "", doctorId: "", comment: "" });
      setRating(0);
      setHoverRating(0);
      setErrors({});
      setStatus("idle");
      setServerError("");
    }, 250);
    return () => clearTimeout(t);
  }, [open]);

  if (!open) return null;

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 3) next.name = "اكتب اسمك (3 حروف على الأقل)";
    if (!form.doctorId) next.doctorId = "اختر الدكتور";
    if (!rating) next.rating = "اختر تقييمك";
    if (form.comment.trim().length < 10)
      next.comment = "اكتب رأيك (10 حروف على الأقل)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("loading");
    setServerError("");

    const { ok } = await submitReview({
      doctorId: form.doctorId,
      patientName: form.name.trim(),
      rating,
      comment: form.comment.trim(),
    });

    if (!ok) {
      setStatus("error");
      setServerError("مش قادرين نستقبل رأيك دلوقتي. جرّب تاني بعد لحظات.");
      return;
    }

    setStatus("success");
    onSubmitted?.();
    setTimeout(onClose, 2600);
  };

  const inputBase = `w-full rounded-xl px-4 py-2.5 text-sm text-right outline-none transition-colors duration-200 border ${
    isDark
      ? "bg-[#0f1c2e] border-gray-700/60 text-white placeholder:text-gray-500 focus:border-blue-400"
      : "bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-600"
  }`;

  const labelBase = `block mb-1.5 text-xs font-semibold text-right ${
    isDark ? "text-gray-200" : "text-gray-700"
  }`;

  const errorText = (msg) =>
    msg ? (
      <p className="mt-1 text-right text-[11px] text-red-500 flex items-center justify-end gap-1">
        <span>{msg}</span>
        <AlertCircle className="w-3 h-3" />
      </p>
    ) : null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-form-title"
        className={`relative w-full max-w-lg rounded-2xl shadow-2xl ${
          isDark
            ? "bg-[#1a2332] border border-gray-700/40"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* زرار الإغلاق */}
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isDark
              ? "bg-white/5 text-gray-300 hover:bg-white/10"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {status === "success" ? (
          <div className="px-6 py-12 text-center">
            <CheckCircle2
              className={`w-14 h-14 mx-auto mb-3 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h3
              className={`text-lg font-bold mb-1.5 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              وصلنا رأيك
            </h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              شكرًا ليك، رأيك ظهر على الموقع.
            </p>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            {/* العنوان */}
            <div className="text-center mb-4">
              <h3
                id="review-form-title"
                className={`text-lg md:text-xl font-bold mb-1 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                اكتب رأيك أو تجربتك
              </h3>
              <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                تجربتك بتساعد غيرك يختار صح
              </p>
            </div>

            <div className="space-y-3.5">
              {/* الاسم */}
              <div>
                <label htmlFor="review-name" className={labelBase}>
                  الاسم
                </label>
                <input
                  id="review-name"
                  ref={firstFieldRef}
                  type="text"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="اكتب اسمك"
                  className={`${inputBase} ${errors.name ? "border-red-500" : ""}`}
                />
                {errorText(errors.name)}
              </div>

              {/* الدكتور */}
              <div>
                <span className={labelBase}>الدكتور</span>
                <DoctorSelect
                  value={form.doctorId}
                  onChange={(id) => setField("doctorId", id)}
                  isDark={isDark}
                  hasError={!!errors.doctorId}
                />
                {errorText(errors.doctorId)}
              </div>

              {/* التقييم */}
              <div>
                <span className={labelBase}>التقييم</span>
                <div className="flex items-center justify-end gap-3">
                  {(hoverRating || rating) > 0 && (
                    <span
                      className={`text-xs font-medium ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {RATING_LABELS[hoverRating || rating]}
                    </span>
                  )}
                  <div
                    className="flex flex-row-reverse gap-1.5"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((value) => {
                      const active = value <= (hoverRating || rating);
                      return (
                        <button
                          key={value}
                          type="button"
                          aria-label={`${value} من 5`}
                          onClick={() => {
                            setRating(value);
                            setErrors((prev) => ({ ...prev, rating: "" }));
                          }}
                          onMouseEnter={() => setHoverRating(value)}
                          className="p-0.5 transition-transform duration-150 hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors duration-150 ${
                              active
                                ? "fill-yellow-400 text-yellow-400"
                                : isDark
                                ? "text-gray-600"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
                {errorText(errors.rating)}
              </div>

              {/* الرأي */}
              <div>
                <label htmlFor="review-comment" className={labelBase}>
                  رأيك
                </label>
                <textarea
                  id="review-comment"
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setField("comment", e.target.value)}
                  placeholder="احكي لنا عن تجربتك في العيادة"
                  maxLength={500}
                  className={`${inputBase} resize-none ${
                    errors.comment ? "border-red-500" : ""
                  }`}
                />
                <div className="flex items-center justify-between mt-1">
                  <span
                    className={`text-[11px] ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {form.comment.length}/500
                  </span>
                  {errorText(errors.comment)}
                </div>
              </div>

              {status === "error" && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-2.5 text-right text-xs text-red-500">
                  {serverError}
                </div>
              )}

              {/* الإرسال */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className={`w-full rounded-xl py-3 text-sm font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                  isDark
                    ? "bg-blue-500 hover:bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    جاري الإرسال
                  </>
                ) : (
                  "إرسال رأيك"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewFormModal;