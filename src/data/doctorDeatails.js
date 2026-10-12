// ============================================================
//  Doctors Images
// ============================================================
import Wafa from "../assets/images/doctors/Wafa.jpeg";
import Mariam from "../assets/images/doctors/Mariam.jpeg";
import Hadeer from "../assets/images/doctors/Hadeer.jpeg";
import Nada from "../assets/images/doctors/Nada.jpeg";
import AyaAshraf from "../assets/images/doctors/AyaAshraf.jpeg";
import Afnan from "../assets/images/doctors/Afnan.jpeg";
import AyaMohamedy from "../assets/images/doctors/AyaMohamedy.jpeg";
import Omar from "../assets/images/doctors/Omar.jpeg";
import AhmedIbrahim1 from "../assets/images/doctors/AhmedIbrahim1.jpeg";
import AhmedGalal from "../assets/images/doctors/AhmedGalal.jpeg";
import Salah from "../assets/images/doctors/Salah.jpeg";
import AhmedIbrahim2 from "../assets/images/doctors/AhmedIbrahim2.jpeg";
import Yousef from "../assets/images/doctors/Yousef.jpeg";

// ============================================================
//  Videos — grouped by doctor
// ============================================================
// د. وفاء قاسم
import WafaaVideo1 from "../assets/images/vedios/wafaa.mp4";
import WafaaVideo2 from "../assets/images/vedios/wafaa1.mp4";
import WafaaVideo3 from "../assets/images/vedios/wafaa2.mp4";
// د. مريم ناجي
import MariamVideo1 from "../assets/images/vedios/mariam.mp4";
import MariamVideo2 from "../assets/images/vedios/mariam1.mp4";
// د. ندى فرحات
import NadaVideo1 from "../assets/images/vedios/nada.mp4";
// د. آية أشرف
import AyaVideo1 from "../assets/images/vedios/aya.mp4";
import AyaVideo2 from "../assets/images/vedios/aya1.mp4";
// د. عمر سمير
import OmarVideo1 from "../assets/images/vedios/omar3.mp4";
import OmarVideo2 from "../assets/images/vedios/omar2.mp4";
import OmarVideo3 from "../assets/images/vedios/omar.mp4";
// د. أحمد إبراهيم
import AhmedVideo1 from "../assets/images/vedios/ahmed.mp4";

// ============================================================
//  Cases (before / after) — prev folder
// ============================================================
import case1 from "../assets/images/prev/1.jpg";
import case2 from "../assets/images/prev/2.jpg";
import case3 from "../assets/images/prev/3.jpg";
import case5 from "../assets/images/prev/5.jpg";
import case6 from "../assets/images/prev/6.jpg";
import case7 from "../assets/images/prev/7.jpg";
import case8 from "../assets/images/prev/8.jpg";
import case9 from "../assets/images/prev/9.jpg";
import case10 from "../assets/images/prev/10.jpg";
import case11 from "../assets/images/prev/11.jpg";
import case12 from "../assets/images/prev/12.jpg";
import case13 from "../assets/images/prev/13.jpg";
import case14 from "../assets/images/prev/14.jpg";
import case15 from "../assets/images/prev/15.jpg";
import case16 from "../assets/images/prev/16.jpg";
import case17 from "../assets/images/prev/17.jpg";
import case18 from "../assets/images/prev/18.jpg";
import case19 from "../assets/images/prev/19.jpg";
import case21 from "../assets/images/prev/21.jpg";
import case23 from "../assets/images/prev/23.jpg";
import case24 from "../assets/images/prev/24.jpg";
import case25 from "../assets/images/prev/25.jpg";
import case26 from "../assets/images/prev/26.jpg";
import case28 from "../assets/images/prev/28.jpg";
import case29 from "../assets/images/prev/29.jpg";
import case30 from "../assets/images/prev/30.jpg";
import case31 from "../assets/images/prev/31.jpg";
import case32 from "../assets/images/prev/32.jpg";
import case33 from "../assets/images/prev/33.jpg";
import case34 from "../assets/images/prev/34.jpg";
import case35 from "../assets/images/prev/35.jpg";
import case37 from "../assets/images/prev/37.jpg";
import case38 from "../assets/images/prev/38.jpg";
import case40 from "../assets/images/prev/40.jpg";
import case41 from "../assets/images/prev/41.jpg";

// ============================================================
//  Clinics — الأربع عيادات (مكان واحد للتعديل)
// ------------------------------------------------------------
//  nameAr         : اسم العيادة — لو فاضي "" العيادة مش هتظهر في الموقع
//  defaultDaysAr  : أيام العمل الأساسية للعيادة
//  defaultHoursAr : ساعات العمل الأساسية (مثال: "من 12 ظهراً إلى 10 مساءً")
// ============================================================
export const CLINICS = {
  qweisna: { nameAr: "عيادة قويسنا", defaultDaysAr: [], defaultHoursAr: "" }, // TODO: مواعيد العيادة
  shebin: { nameAr: "عيادة شبين", defaultDaysAr: [], defaultHoursAr: "" }, // TODO: مواعيد العيادة
  clinic3: { nameAr: "", defaultDaysAr: [], defaultHoursAr: "" }, // TODO: اسم + مواعيد العيادة الثالثة
  clinic4: { nameAr: "", defaultDaysAr: [], defaultHoursAr: "" }, // TODO: اسم + مواعيد العيادة الرابعة
};

// مواعيد العيادة الأساسية في الأربع عيادات (daysAr: null → ياخد مواعيد العيادة من CLINICS)
const CLINIC_HOURS = Object.keys(CLINICS).map((clinic) => ({ clinic, daysAr: null }));

// ============================================================
//  Doctors Data
// ------------------------------------------------------------
//  schedule: [{ clinic: "<key من CLINICS>", daysAr: [...] | null, hoursAr?: "" }]
//    daysAr = null  → مواعيد العيادة الأساسية
//    daysAr = [...] → أيام خاصة بالدكتور في العيادة دي
// ============================================================
const doctorsDetailsRaw = [
  {
    id: 1,
    nameAr: "د. وفاء قاسم",
    nameEn: "Dr. Wafaa Kassem",
    roleAr: "أخصائية طب أسنان الأطفال",
    specialtyAr: "أخصائية طب أسنان الأطفال",
    img: Wafa,
    bio: "أخصائية طب أسنان الأطفال بماجستير من جامعة طنطا، تتميز بالتعامل اللطيف مع الأطفال وتقديم رعاية شاملة لأسنانهم في بيئة مريحة وآمنة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "2000+", label: "مريض سعيد" },
      { number: "8+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "150+", label: "حالة شهرياً" },
    ],
    achievements: [
      "ماجستير طب أسنان الأطفال — جامعة طنطا",
      "خبرة واسعة في علاج أسنان الأطفال والرضع",
      "متخصصة في التخدير الموضعي للأطفال",
      "أكثر من 2000 حالة ناجحة",
    ],
    specializations: [
      "طب أسنان الأطفال",
      "حشو أسنان الألبان",
      "علاج التسوس المبكر",
      "التخدير الموضعي للأطفال",
      "تثقيف الأطفال عن صحة الفم",
    ],
    videos: [
      { id: 1, titleAr: "حشو العصب", categoryAr: "حشو العصب", duration: "3:15", src: WafaaVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7542845179703594258" },
      { id: 2, titleAr: "التخدير الكلي", categoryAr: "التخدير الكلي", duration: "2:15", src: WafaaVideo2, url: "https://www.tiktok.com/@aboelnagadc/video/7546525704742128904" },
      { id: 3, titleAr: "أسنان القرش", categoryAr: "أسنان القرش", duration: "2:45", src: WafaaVideo3, url: "https://www.tiktok.com/@aboelnagadc/video/7564844816786263297" },
    ],
    cases: [
      { id: 1, image: case30, titleAr: "علاج أسنان الأطفال", procedureAr: "طب أطفال" },
      { id: 2, image: case6, titleAr: "علاج تسوس متقدم", procedureAr: "حشوات تجميلية" },
      { id: 3, image: case32, titleAr: "علاج الحساسية", procedureAr: "علاج الحساسية" },
      { id: 4, image: case37, titleAr: "علاج الخراج", procedureAr: "علاج الخراج" },
      { id: 5, image: case28, titleAr: "علاج الصرير", procedureAr: "واقي الأسنان" },
    ],
    reviews: [
      { id: 1, name: "سارة محمد", rating: 5, comment: "دكتورة وفاء رائعة مع أطفالي، تعاملها لطيف جداً والأطفال بيحبوها", date: "منذ أسبوع" },
      { id: 2, name: "محمد عبدالله", rating: 5, comment: "أفضل دكتورة أطفال، ابني كان خايف وخرج مبسوط من العيادة", date: "منذ أسبوعين" },
      { id: 3, name: "نورا أحمد", rating: 5, comment: "محترفة وصبورة، أنصح بيها كل أم", date: "منذ 3 أسابيع" },
    ],
  },
  {
    // ✏️ UPDATED
    id: 2,
    nameAr: "د. مريم ناجي",
    nameEn: "Dr. Mariam Nagi",
    roleAr: "أخصائية طب أسنان الأطفال",
    specialtyAr: "أخصائية طب أسنان الأطفال",
    img: Mariam,
    bio: "أخصائية طب أسنان الأطفال والحشوات التجميلية والتركيبات، متخصصة في جراحات اللثة التجميلية وعلاج الابتسامة اللثوية، وتهتم بتحقيق ابتسامة طبيعية وجميلة لمرضاها باستخدام أحدث المواد والتقنيات.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1800+", label: "مريض سعيد" },
      { number: "7+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "120+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية طب أسنان الأطفال",
      "متخصصة في جراحات اللثة التجميلية وعلاج الابتسامة اللثوية",
      "خبرة في الحشوات التجميلية وتركيبات الزيركونيا والإيماكس",
      "أكثر من 1800 حالة ناجحة",
    ],
    specializations: [
      "طب أسنان الأطفال",
      "جراحات اللثة التجميلية",
      "علاج الابتسامة اللثوية",
      "الحشوات التجميلية",
      "تركيبات الأسنان",
      "ابتسامة هوليود",
    ],
    videos: [
      { id: 1, titleAr: "كسور الأسنان", categoryAr: "كسور الأسنان", duration: "2:00", src: MariamVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7559988525509266689" },
      { id: 2, titleAr: "ابتسامة هوليود", categoryAr: "ابتسامة هوليود", duration: "1:55", src: MariamVideo2, url: "https://www.tiktok.com/@aboelnagadc/video/7570007804296072469" },
    ],
    cases: [
      { id: 1, image: case5, titleAr: "ابتسامة هوليود", procedureAr: "فينير مخصص" },
      { id: 2, image: case2, titleAr: "تجميل الابتسامة الكامل", procedureAr: "قشور خزفية" },
      { id: 3, image: case14, titleAr: "تجميل الأسنان الأمامية", procedureAr: "فينير أمامي" },
      { id: 4, image: case25, titleAr: "ابتسامة رقمية", procedureAr: "تصميم رقمي" },
      { id: 5, image: case40, titleAr: "ابتسامة مثالية", procedureAr: "تجميل شامل" },
    ],
    reviews: [
      { id: 1, name: "هبة علي", rating: 5, comment: "دكتورة مريم غيرت شكل أسناني بالكامل، النتيجة طبيعية جداً", date: "منذ أسبوع" },
      { id: 2, name: "أحمد حسن", rating: 5, comment: "محترفة في التجميل، أنصح بيها", date: "منذ أسبوعين" },
      { id: 3, name: "ريم محمود", rating: 5, comment: "ابتسامتي بقت أحلى بفضل دكتورة مريم", date: "منذ شهر" },
    ],
  },
  {
    // ✏️ UPDATED
    id: 3,
    nameAr: "د. هدير نبيل الفقي",
    nameEn: "Dr. Hadeer Nabil El Feky",
    roleAr: "أخصائية حشو العصب والتركيبات الثابتة والتجميلية",
    specialtyAr: "أخصائية حشو العصب والتركيبات الثابتة والتجميلية",
    img: Hadeer,
    bio: "أخصائية حشو العصب والتركيبات الثابتة والتجميلية، تجمع بين إنقاذ الأسنان الطبيعية وتصميم تركيبات دقيقة بمظهر طبيعي وأعلى معايير الجودة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1500+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "100+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية حشو العصب والتركيبات الثابتة والتجميلية",
      "خبرة في علاج الجذور وإنقاذ الأسنان الطبيعية",
      "متخصصة في التركيبات التجميلية والتركيبات على الزرعات",
      "أكثر من 1500 حالة ناجحة",
    ],
    specializations: [
      "حشو العصب",
      "علاج الجذور",
      "التركيبات الثابتة",
      "التركيبات التجميلية",
      "تاج وجسر",
      "تركيبات على الزرعات",
    ],
    videos: [],
    cases: [
      { id: 1, image: case10, titleAr: "حشو العصب بالميكروسكوب", procedureAr: "علاج العصب" },
      { id: 2, image: case12, titleAr: "جسر أسنان ثابت", procedureAr: "جسر ثابت" },
      { id: 3, image: case24, titleAr: "تركيبات ثابتة متعددة", procedureAr: "جسور متعددة" },
      { id: 4, image: case7, titleAr: "تركيبات الزيركون", procedureAr: "تيجان زيركون" },
      { id: 5, image: case34, titleAr: "قشور السيراميك", procedureAr: "سيراميك" },
    ],
    reviews: [
      { id: 1, name: "خالد إبراهيم", rating: 5, comment: "دكتورة هدير محترفة جداً في التركيبات، النتيجة ممتازة", date: "منذ أسبوع" },
      { id: 2, name: "فاطمة سعيد", rating: 5, comment: "تركيباتي طبيعية ومريحة، شكراً دكتورة", date: "منذ أسبوعين" },
    ],
  },
  {
    // ✏️ UPDATED
    id: 4,
    nameAr: "د. ندى فرحات",
    nameEn: "Dr. Nada Farahat",
    roleAr: "أخصائية طب وجراحة الفم والأسنان",
    specialtyAr: "أخصائية طب وجراحة الفم والأسنان",
    img: Nada,
    bio: "أخصائية طب وجراحة الفم والأسنان، حاصلة على بكالوريوس طب الفم والأسنان من جامعة بني سويف عام 2020، تهتم بحشو العصب والحشوات التجميلية والتركيبات الثابتة لإنقاذ الأسنان الطبيعية وتقديم علاج شامل.",
    schedule: [
      { clinic: "qweisna", daysAr: ["الأحد", "الأربعاء"] },
      { clinic: "shebin", daysAr: ["السبت", "الثلاثاء"] },
    ],
    stats: [
      { number: "2200+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "130+", label: "حالة شهرياً" },
    ],
    achievements: [
      "بكالوريوس طب الفم والأسنان — جامعة بني سويف، 2020",
      "أخصائية طب وجراحة الفم والأسنان",
      "خبرة في حشو العصب وعلاج الجذور المعقد",
      "أكثر من 2200 حالة ناجحة",
    ],
    specializations: [
      "طب وجراحة الفم والأسنان",
      "حشو العصب",
      "علاج الجذور",
      "الحشوات التجميلية",
      "التركيبات الثابتة",
      "علاج الالتهابات",
    ],
    videos: [
      { id: 1, titleAr: "الالتهابات", categoryAr: "الالتهابات", duration: "2:30", src: NadaVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7534740436607454465" },
    ],
    cases: [
      { id: 1, image: case10, titleAr: "حشو العصب بالميكروسكوب", procedureAr: "علاج العصب" },
      { id: 2, image: case37, titleAr: "علاج الخراج", procedureAr: "علاج الخراج" },
      { id: 3, image: case21, titleAr: "إعادة بناء الأسنان", procedureAr: "بناء كامل" },
      { id: 4, image: case12, titleAr: "جسر أسنان ثابت", procedureAr: "جسر ثابت" },
      { id: 5, image: case34, titleAr: "قشور السيراميك", procedureAr: "سيراميك" },
    ],
    reviews: [
      { id: 1, name: "ياسمين أحمد", rating: 5, comment: "دكتورة ندى أنقذت ضرسي بحشو عصب ممتاز، بدون ألم", date: "منذ أسبوع" },
      { id: 2, name: "عمر خالد", rating: 5, comment: "محترفة ودقيقة في شغلها", date: "منذ أسبوعين" },
      { id: 3, name: "دينا محمد", rating: 5, comment: "أفضل دكتورة حشو عصب تعاملت معاها", date: "منذ 3 أسابيع" },
    ],
  },
  {
    id: 5,
    nameAr: "د. آية أشرف",
    nameEn: "Dr. Aya Ashraf",
    roleAr: "أخصائية الحشوات والتركيبات التجميلية",
    specialtyAr: "أخصائية الحشوات والتركيبات التجميلية",
    img: AyaAshraf,
    bio: "أخصائية في الحشوات والتركيبات التجميلية، تهتم بتقديم علاج دقيق يحافظ على مظهر الأسنان الطبيعي.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1600+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "110+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية الحشوات والتركيبات التجميلية",
      "خبرة في مواد الحشو التجميلي الحديثة",
      "متخصصة في ترميم الأسنان الأمامية",
      "أكثر من 1600 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "تركيبات تجميلية",
      "ترميم الأسنان",
      "علاج التسوس",
      "تجميل الابتسامة",
    ],
    videos: [
      { id: 1, titleAr: "التسوس الخفي", categoryAr: "التسوس الخفي", duration: "1:45", src: AyaVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7531054115451915528" },
      { id: 2, titleAr: "حشو العصب", categoryAr: "حشو العصب", duration: "1:30", src: AyaVideo2, url: "https://www.tiktok.com/@aboelnagadc/video/7541388128326585618" },
    ],
    cases: [
      { id: 1, image: case18, titleAr: "تجميل بالكومبوزيت", procedureAr: "كومبوزيت فينير" },
      { id: 2, image: case6, titleAr: "علاج تسوس متقدم", procedureAr: "حشوات تجميلية" },
      { id: 3, image: case35, titleAr: "علاج الفراغات", procedureAr: "إغلاق الفراغات" },
      { id: 4, image: case14, titleAr: "تجميل الأسنان الأمامية", procedureAr: "فينير أمامي" },
      { id: 5, image: case9, titleAr: "تجميل الابتسامة", procedureAr: "تصميم الابتسامة" },
    ],
    reviews: [
      { id: 1, name: "مريم حسين", rating: 5, comment: "دكتورة آية شاطرة جداً في الحشوات التجميلية", date: "منذ أسبوع" },
      { id: 2, name: "كريم سعد", rating: 5, comment: "نتيجة ممتازة وأسعار مناسبة", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 6,
    nameAr: "د. أفنان حازم",
    nameEn: "Dr. Afnan Hazem",
    roleAr: "أخصائية التركيبات المتحركة",
    specialtyAr: "أخصائية التركيبات المتحركة",
    img: Afnan,
    bio: "أخصائية في التركيبات المتحركة، تقدم حلولاً مريحة وعملية لاستبدال الأسنان المفقودة بأعلى جودة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1200+", label: "مريض سعيد" },
      { number: "5+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "80+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية التركيبات المتحركة",
      "خبرة في تصميم التركيبات الجزئية والكاملة",
      "متخصصة في تركيبات الأكريل",
      "أكثر من 1200 حالة ناجحة",
    ],
    specializations: [
      "التركيبات المتحركة",
      "التركيبات الجزئية",
      "التركيبات الكاملة",
      "تعديل التركيبات",
      "صيانة التركيبات",
    ],
    videos: [],
    cases: [
      { id: 1, image: case16, titleAr: "تركيبة متحركة", procedureAr: "طقم أسنان" },
      { id: 2, image: case38, titleAr: "تركيبة هجينة", procedureAr: "تركيبة مختلطة" },
      { id: 3, image: case26, titleAr: "زراعة All-on-4", procedureAr: "زراعة كاملة" },
      { id: 4, image: case33, titleAr: "تركيبات مؤقتة", procedureAr: "تركيبات مؤقتة" },
      { id: 5, image: case31, titleAr: "تعديل الإطباق", procedureAr: "تعديل العضة" },
    ],
    reviews: [
      { id: 1, name: "سعيد محمود", rating: 5, comment: "تركيباتي مريحة جداً ومظهرها طبيعي", date: "منذ أسبوع" },
      { id: 2, name: "عائشة علي", rating: 5, comment: "دكتورة أفنان محترفة ومتعاونة", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 7,
    nameAr: "د. آية محمدي",
    nameEn: "Dr. Aya Mohamedy",
    roleAr: "أخصائية الحشوات والتركيبات الثابتة",
    specialtyAr: "أخصائية الحشوات والتركيبات الثابتة",
    img: AyaMohamedy,
    bio: "أخصائية في الحشوات التجميلية والتركيبات الثابتة، تلتزم بتقديم علاج متكامل يجمع بين الجمال والوظيفة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1400+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "100+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية الحشوات التجميلية والتركيبات الثابتة",
      "خبرة في التركيبات الخزفية",
      "متخصصة في علاج الأسنان الأمامية",
      "أكثر من 1400 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "التركيبات الثابتة",
      "تاج الأسنان",
      "جسر الأسنان",
      "ترميم الأسنان",
    ],
    videos: [],
    cases: [
      { id: 1, image: case29, titleAr: "تركيب إيماكس", procedureAr: "إيماكس" },
      { id: 2, image: case12, titleAr: "جسر أسنان ثابت", procedureAr: "جسر ثابت" },
      { id: 3, image: case24, titleAr: "تركيبات ثابتة متعددة", procedureAr: "جسور متعددة" },
      { id: 4, image: case34, titleAr: "قشور السيراميك", procedureAr: "سيراميك" },
      { id: 5, image: case21, titleAr: "إعادة بناء الأسنان", procedureAr: "بناء كامل" },
    ],
    reviews: [
      { id: 1, name: "ليلى أحمد", rating: 5, comment: "دكتورة آية محمدي ممتازة، شغلها دقيق ومنظم", date: "منذ أسبوع" },
      { id: 2, name: "حسام فتحي", rating: 5, comment: "تركيبات ثابتة ممتازة، أنصح بيها", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 8,
    nameAr: "د. عمر سمير",
    nameEn: "Dr. Omar Samir",
    roleAr: "أخصائي جراحة وزراعة الأسنان",
    specialtyAr: "أخصائي جراحة وزراعة الأسنان",
    img: Omar,
    bio: "أخصائي في جراحة وزراعة الأسنان، يقدم حلولاً متقدمة لاستبدال الأسنان المفقودة بزرعات عالية الجودة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "3000+", label: "مريض سعيد" },
      { number: "10+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "180+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي جراحة وزراعة الأسنان",
      "خبرة في زراعة الأسنان الفورية",
      "متخصص في جراحة الفم والأسنان",
      "أكثر من 3000 حالة ناجحة",
    ],
    specializations: [
      "زراعة الأسنان",
      "جراحة الفم",
      "خلع الأسنان",
      "زراعة فورية",
      "علاج ضرس العقل",
    ],
    videos: [
      { id: 1, titleAr: "زراعة الأسنان", categoryAr: "زراعة الأسنان", duration: "0:50", src: OmarVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7554137350373133584" },
      { id: 2, titleAr: "التهابات ضرس العقل", categoryAr: "التهابات ضرس العقل", duration: "3:40", src: OmarVideo2, url: "https://www.tiktok.com/@aboelnagadc/video/7527343301104569608" },
      { id: 3, titleAr: "زراعة الأسنان", categoryAr: "زراعة الأسنان", duration: "4:00", src: OmarVideo3, url: "https://www.tiktok.com/@aboelnagadc/video/7539519366593858823" },
    ],
    cases: [
      { id: 1, image: case3, titleAr: "زراعة أسنان متقدمة", procedureAr: "زراعة فورية" },
      { id: 2, image: case26, titleAr: "زراعة All-on-4", procedureAr: "زراعة كاملة" },
      { id: 3, image: case19, titleAr: "زراعة عظم الفك", procedureAr: "ترقيع عظمي" },
      { id: 4, image: case15, titleAr: "علاج ضرس العقل", procedureAr: "خلع جراحي" },
      { id: 5, image: case8, titleAr: "علاج اللثة المتقدم", procedureAr: "جراحة لثة" },
    ],
    reviews: [
      { id: 1, name: "محمود سامي", rating: 5, comment: "دكتور عمر أفضل دكتور زراعة، عملية ناجحة 100%", date: "منذ أسبوع" },
      { id: 2, name: "رانيا حسن", rating: 5, comment: "محترف في الزراعة، النتيجة طبيعية جداً", date: "منذ أسبوعين" },
      { id: 3, name: "طارق عبدالرحمن", rating: 5, comment: "جراحة ممتازة وبدون مضاعفات", date: "منذ 3 أسابيع" },
    ],
  },
  {
    id: 9,
    nameAr: "د. أحمد إبراهيم",
    nameEn: "Dr. Ahmed Ibrahim",
    roleAr: "أخصائي حشو العصب والتركيبات",
    specialtyAr: "أخصائي حشو العصب والتركيبات",
    img: AhmedIbrahim1,
    bio: "أخصائي في حشو العصب والحشوات التجميلية والتركيبات، يسعى لإنقاذ كل سن ممكن مع الحفاظ على جمال الابتسامة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "2500+", label: "مريض سعيد" },
      { number: "9+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "140+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي حشو العصب والتركيبات",
      "خبرة في علاج الجذور المعقد",
      "متخصص في الحشوات التجميلية",
      "أكثر من 2500 حالة ناجحة",
    ],
    specializations: [
      "حشو العصب",
      "علاج الجذور",
      "الحشوات التجميلية",
      "التركيبات",
      "علاج الالتهابات",
    ],
    videos: [
      { id: 1, titleAr: "نزيف اللثة", categoryAr: "نزيف اللثة", duration: "4:20", src: AhmedVideo1, url: "https://www.tiktok.com/@aboelnagadc/video/7562250183296240912" },
    ],
    cases: [
      { id: 1, image: case23, titleAr: "علاج الجذور المعقد", procedureAr: "علاج قنوات" },
      { id: 2, image: case10, titleAr: "حشو العصب بالميكروسكوب", procedureAr: "علاج العصب" },
      { id: 3, image: case37, titleAr: "علاج الخراج", procedureAr: "علاج الخراج" },
      { id: 4, image: case17, titleAr: "علاج التهاب اللثة", procedureAr: "تنظيف عميق" },
      { id: 5, image: case32, titleAr: "علاج الحساسية", procedureAr: "علاج الحساسية" },
    ],
    reviews: [
      { id: 1, name: "أمل يوسف", rating: 5, comment: "دكتور أحمد محترف في حشو العصب، أنصح بيه", date: "منذ أسبوع" },
      { id: 2, name: "إبراهيم ناصر", rating: 5, comment: "علاج ممتاز وبدون ألم", date: "منذ أسبوعين" },
    ],
  },
  {
    // ✏️ UPDATED
    id: 10,
    nameAr: "د. أحمد جلال",
    nameEn: "Dr. Ahmed Galal",
    roleAr: "طبيب أسنان عام | طب الأسنان الترميمي والتجميلي",
    specialtyAr: "طبيب أسنان عام | طب الأسنان الترميمي والتجميلي",
    img: AhmedGalal,
    bio: "طبيب أسنان عام حاصل على بكالوريوس طب وجراحة الفم والأسنان من جامعة عين شمس عام 2023، يهتم بطب الأسنان الترميمي والتجميلي وعلاج الجذور، بنهج محافظ يحافظ على الأسنان الطبيعية ويحقق نتيجة وظيفية وجمالية متوازنة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "2000+", label: "مريض سعيد" },
      { number: "3+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "120+", label: "حالة شهرياً" },
    ],
    achievements: [
      "بكالوريوس طب وجراحة الفم والأسنان (BDS) — جامعة عين شمس، 2023",
      "خبرة في الترميم بالحشوات التجميلية والمواد الحديثة",
      "نهج علاجي محافظ يحافظ على أنسجة الأسنان الطبيعية",
      "التزام بالتعقيم والعزل الجيد أثناء الإجراءات العلاجية",
    ],
    specializations: [
      "طب الأسنان الترميمي",
      "طب الأسنان التجميلي",
      "الحشوات التجميلية",
      "علاج جذور الأسنان",
      "علاج وحشو الأسنان",
    ],
    videos: [],
    cases: [
      { id: 1, image: case18, titleAr: "تجميل بالكومبوزيت", procedureAr: "كومبوزيت فينير" },
      { id: 2, image: case10, titleAr: "حشو العصب بالميكروسكوب", procedureAr: "علاج العصب" },
      { id: 3, image: case21, titleAr: "إعادة بناء الأسنان", procedureAr: "بناء كامل" },
      { id: 4, image: case13, titleAr: "قشور لومينير", procedureAr: "لومينير" },
      { id: 5, image: case6, titleAr: "علاج تسوس متقدم", procedureAr: "حشوات تجميلية" },
    ],
    reviews: [
      { id: 1, name: "منى سعيد", rating: 5, comment: "دكتور أحمد جلال شاطر جداً، حشواتي مش باينة خالص", date: "منذ أسبوع" },
      { id: 2, name: "وليد كمال", rating: 5, comment: "محترف ومتعاون", date: "منذ أسبوعين" },
    ],
  },
  {
    // ✏️ UPDATED
    id: 11,
    nameAr: "د. محمد صلاح",
    nameEn: "Dr. Mohamed Salah",
    roleAr: "أخصائي الحشوات والتركيبات التجميلية وحشو العصب",
    specialtyAr: "أخصائي الحشوات والتركيبات التجميلية وحشو العصب",
    img: Salah,
    bio: "أخصائي الحشوات والتركيبات التجميلية وحشو العصب، يركز على علاج يحافظ على مظهر الأسنان الطبيعي مع ضمان المتانة.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1300+", label: "مريض سعيد" },
      { number: "5+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "90+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي الحشوات والتركيبات التجميلية وحشو العصب",
      "خبرة في مواد الحشو الكومبوزيت",
      "خبرة في حشو العصب وعلاج الجذور",
      "أكثر من 1300 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "التركيبات التجميلية",
      "حشو العصب",
      "علاج التسوس",
      "ترميم الأسنان",
      "تجميل الابتسامة",
    ],
    videos: [],
    cases: [
      { id: 1, image: case6, titleAr: "علاج تسوس متقدم", procedureAr: "حشوات تجميلية" },
      { id: 2, image: case18, titleAr: "تجميل بالكومبوزيت", procedureAr: "كومبوزيت فينير" },
      { id: 3, image: case23, titleAr: "علاج الجذور المعقد", procedureAr: "علاج قنوات" },
      { id: 4, image: case1, titleAr: "تحول تبييض الأسنان", procedureAr: "تبييض احترافي" },
      { id: 5, image: case32, titleAr: "علاج الحساسية", procedureAr: "علاج الحساسية" },
    ],
    reviews: [
      { id: 1, name: "منى أحمد", rating: 5, comment: "دكتور صلاح ممتاز في الحشوات التجميلية", date: "منذ أسبوع" },
      { id: 2, name: "حسين محمد", rating: 5, comment: "شغل نظيف ومحترف", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 12,
    nameAr: "د. أحمد إبراهيم",
    nameEn: "Dr. Ahmed Ibrahim",
    roleAr: "أخصائي الحشوات والتركيبات الثابتة",
    specialtyAr: "أخصائي الحشوات والتركيبات الثابتة",
    img: AhmedIbrahim2,
    bio: "أخصائي في الحشوات التجميلية والتركيبات الثابتة، يقدم حلولاً شاملة لترميم الأسنان واستعادة وظيفتها.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1700+", label: "مريض سعيد" },
      { number: "7+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "110+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي الحشوات التجميلية والتركيبات الثابتة",
      "خبرة في التركيبات الخزفية",
      "متخصص في علاج الأسنان الخلفية",
      "أكثر من 1700 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "التركيبات الثابتة",
      "تاج الأسنان",
      "جسر الأسنان",
      "ترميم الأسنان",
    ],
    videos: [],
    cases: [
      { id: 1, image: case7, titleAr: "تركيبات الزيركون", procedureAr: "تيجان زيركون" },
      { id: 2, image: case24, titleAr: "تركيبات ثابتة متعددة", procedureAr: "جسور متعددة" },
      { id: 3, image: case29, titleAr: "تركيب إيماكس", procedureAr: "إيماكس" },
      { id: 4, image: case33, titleAr: "تركيبات مؤقتة", procedureAr: "تركيبات مؤقتة" },
      { id: 5, image: case21, titleAr: "إعادة بناء الأسنان", procedureAr: "بناء كامل" },
    ],
    reviews: [
      { id: 1, name: "نادية فؤاد", rating: 5, comment: "دكتور أحمد محترف في التركيبات الثابتة", date: "منذ أسبوع" },
      { id: 2, name: "جمال رشاد", rating: 5, comment: "نتيجة ممتازة وسعر مناسب", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 13,
    nameAr: "د. يوسف أسامة",
    nameEn: "Dr. Youssef Osama",
    roleAr: "أخصائي الحشوات التجميلية وحشو العصب",
    specialtyAr: "أخصائي الحشوات التجميلية وحشو العصب",
    img: Yousef,
    bio: "أخصائي في الحشوات التجميلية وحشو العصب والتركيبات، يلتزم بتقديم رعاية شاملة تجمع بين العلاج والتجميل.",
    schedule: CLINIC_HOURS,
    stats: [
      { number: "1500+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "100+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي الحشوات التجميلية وحشو العصب",
      "خبرة في علاج الجذور",
      "متخصص في الحشوات الأمامية",
      "أكثر من 1500 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "حشو العصب",
      "التركيبات",
      "علاج التسوس",
      "ترميم الأسنان",
    ],
    videos: [],
    cases: [
      { id: 1, image: case23, titleAr: "علاج الجذور المعقد", procedureAr: "علاج قنوات" },
      { id: 2, image: case18, titleAr: "تجميل بالكومبوزيت", procedureAr: "كومبوزيت فينير" },
      { id: 3, image: case9, titleAr: "تجميل الابتسامة", procedureAr: "تصميم الابتسامة" },
      { id: 4, image: case11, titleAr: "تبييض بالليزر", procedureAr: "تبييض ليزر" },
      { id: 5, image: case41, titleAr: "ابتسامة مثالية", procedureAr: "تجميل شامل" },
    ],
    reviews: [
      { id: 1, name: "سمية حسن", rating: 5, comment: "دكتور يوسف ممتاز ومحترف", date: "منذ أسبوع" },
      { id: 2, name: "باسم حسن", rating: 5, comment: "حشو عصب بدون ألم، شكراً دكتور", date: "منذ أسبوعين" },
    ],
  },
];

const usedDoctorSlugs = new Set();

/** URL slug from English name (e.g. /wafaa-kassem); suffix when names collide */
function buildDoctorSlug(nameEn, used) {
  const base = nameEn
    .replace(/^Dr\.\s*/i, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  let slug = base;
  let suffix = 2;
  while (used.has(slug)) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  used.add(slug);
  return slug;
}

export const doctorsDetails = doctorsDetailsRaw.map((doctor) => ({
  ...doctor,
  slug: buildDoctorSlug(doctor.nameEn, usedDoctorSlugs),
}));

export const getDoctorById = (id) =>
  doctorsDetails.find((d) => String(d.id) === String(id)) ?? null;

export const getDoctorBySlug = (slug) => {
  if (!slug) return null;
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    decoded = slug;
  }
  const normalized = decoded.toLowerCase();
  return doctorsDetails.find((d) => d.slug === normalized) ?? null;
};

export const getDoctorPath = (doctor) => (doctor?.slug ? `/${doctor.slug}` : "/");

// بيرجّع مواعيد الدكتور جاهزة للعرض:
// [{ key, nameAr, daysAr, hoursAr, isCustom }]
export const getDoctorSchedule = (doctor) =>
  (doctor?.schedule?.length ? doctor.schedule : CLINIC_HOURS)
    .map(({ clinic, daysAr, hoursAr }) => {
      const info = CLINICS[clinic];
      if (!info?.nameAr) return null; // عيادة لسه اسمها مش متسجل → متظهرش
      const isCustom = Array.isArray(daysAr);
      return {
        key: clinic,
        nameAr: info.nameAr,
        daysAr: isCustom ? daysAr : info.defaultDaysAr,
        hoursAr: hoursAr || info.defaultHoursAr,
        isCustom,
      };
    })
    .filter(Boolean);

export const detailsNavLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "التخصصات", href: "#specializations", field: "specializations" },
  { label: "الحالات", href: "#cases", field: "cases" },
  { label: "الفيديوهات", href: "#videos", field: "videos" },
  { label: "آراء المرضى", href: "#reviews" },
  { label: "احجز موعد", href: "#booking" },
];