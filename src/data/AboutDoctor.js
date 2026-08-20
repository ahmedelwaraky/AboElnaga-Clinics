import { Award, GraduationCap, Heart, Users } from "lucide-react";

/* ===== إعدادات المصدر الوحيد للأرقام =====
   غيّر هنا بس — كل الموقع هيتحدث لوحده */
export const GRADUATION_YEAR = 2013;
const GRADUATION_MONTH = 7; // 1-12 (شهر التخرج)

const calcYears = () => {
  const now = new Date();
  let years = now.getFullYear() - GRADUATION_YEAR;
  if (now.getMonth() + 1 < GRADUATION_MONTH) years -= 1;
  return Math.max(years, 0);
};

export const getYearsOfExperience = calcYears;
export const yearsOfExperience = calcYears();

export const specializations = [
  { text: "طب الأسنان التجميلي", color: "blue" },
  { text: "زراعة الأسنان", color: "blue" },
  { text: "التقويم المتقدم", color: "blue" },
  { text: "علاج الجذور", color: "blue" },
  { text: "التقويم الشفاف", color: "blue" },
  { text: "تبييض الأسنان", color: "blue" },
  { text: "طب أسنان الأطفال", color: "blue" },
  { text: "الفينير الرقيقة", color: "blue" },
  { text: "قشرة الأسنان", color: "blue" },
];

export const getStats = () => [
  { icon: Heart,         number: "100%",                  label: "نسبة النجاح",    color: "blue" },
  { icon: GraduationCap, number: "6",                     label: "الشهادات",       color: "blue" },
  { icon: Users,         number: "2300+",                 label: "المرضى السعداء", color: "blue" },
  { icon: Award,         number: `${calcYears()}+`,       label: "سنوات الخبرة",   color: "blue" },
];

export const stats = getStats();