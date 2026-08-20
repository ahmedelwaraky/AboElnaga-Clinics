import { Award, GraduationCap, Heart, Users } from "lucide-react";

// ===== إعدادات العيادة =====
const CAREER_START = { year: 2014, month: 9 }; // month: 1-12 (شهر بداية الممارسة)

const getYearsOfExperience = ({ year, month }) => {
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() + 1 < month) years -= 1; // ما يزودش غير بعد الشهر
  return Math.max(years, 0);
};
export const yearsOfExperience = getYearsOfExperience(CAREER_START);

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

export const stats = [
  {
    icon: Heart,
    number: "100%",
    label: "نسبة النجاح",
    color: "blue",
  },
  {
    icon: GraduationCap,
    number: "6",
    label: "الشهادات",
    color: "blue",
  },
  {
    icon: Users,
    number: "2300+",
    label: "المرضى السعداء",
    color: "blue",
  },
   { icon: Award,          number: `${yearsOfExperience}+`,   label: "سنوات الخبرة",   color: "blue" },
];
