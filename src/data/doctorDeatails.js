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

import Vedio1 from "../assets/images/vedios/omar3.mp4";
import Vedio2 from "../assets/images/vedios/aya.mp4";
import Vedio3 from "../assets/images/vedios/wafaa.mp4";
import Vedio4 from "../assets/images/vedios/mariam.mp4";
import Vedio5 from "../assets/images/vedios/ahmed.mp4";
import Vedio6 from "../assets/images/vedios/nada.mp4";
import Vedio7 from "../assets/images/vedios/mariam1.mp4";
import Vedio8 from "../assets/images/vedios/omar2.mp4";
import Vedio9 from "../assets/images/vedios/wafaa1.mp4";
import Vedio10 from "../assets/images/vedios/aya1.mp4";
import Vedio11 from "../assets/images/vedios/omar.mp4";
import Vedio12 from "../assets/images/vedios/wafaa2.mp4";

export const doctorsDetails = [
  {
    id: 1,
    nameAr: "د. وفاء قاسم",
    nameEn: "Dr. Wafaa Kassem",
    roleAr: "أخصائية طب أسنان الأطفال",
    specialtyAr: "أخصائية طب أسنان الأطفال",
    img: Wafa,
    bio: "أخصائية طب أسنان الأطفال بماجستير من جامعة طنطا، تتميز بالتعامل اللطيف مع الأطفال وتقديم رعاية شاملة لأسنانهم في بيئة مريحة وآمنة.",
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
      { id: 1, title: "حشو العصب", duration: "3:15", src: Vedio3, url: "https://www.tiktok.com/@aboelnagadc/video/7542845179703594258" },
      { id: 2, title: "التخدير الكلي", duration: "2:15", src: Vedio9, url: "https://www.tiktok.com/@aboelnagadc/video/7546525704742128904" },
      { id: 3, title: "أسنان القرش", duration: "2:45", src: Vedio12, url: "https://www.tiktok.com/@aboelnagadc/video/7564844816786263297" },
    ],
    reviews: [
      { id: 1, name: "سارة محمد", rating: 5, comment: "دكتورة وفاء رائعة مع أطفالي، تعاملها لطيف جداً والأطفال بيحبوها", date: "منذ أسبوع" },
      { id: 2, name: "محمد عبدالله", rating: 5, comment: "أفضل دكتورة أطفال، ابني كان خايف وخرج مبسوط من العيادة", date: "منذ أسبوعين" },
      { id: 3, name: "نورا أحمد", rating: 5, comment: "محترفة وصبورة، أنصح بيها كل أم", date: "منذ 3 أسابيع" },
    ],
  },
  {
    id: 2,
    nameAr: "د. مريم ناجي",
    nameEn: "Dr. Mariam Nagi",
    roleAr: "أخصائية الحشوات التجميلية والتركيبات",
    specialtyAr: "أخصائية الحشوات التجميلية والتركيبات",
    img: Mariam,
    bio: "أخصائية في الحشوات التجميلية والتركيبات، تهتم بتحقيق ابتسامة طبيعية وجميلة لمرضاها باستخدام أحدث المواد والتقنيات.",
    stats: [
      { number: "1800+", label: "مريض سعيد" },
      { number: "7+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "120+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية الحشوات التجميلية والتركيبات",
      "خبرة في تركيبات الزirconia والإيماكس",
      "متخصصة في تجميل الابتسامة",
      "أكثر من 1800 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "تركيبات الأسنان",
      "ابتسامة هوليود",
      "تجميل الأسنان الأمامية",
      "تركيبات الزirconia",
    ],
    videos: [
      { id: 1, title: "كسور الأسنان", duration: "2:00", src: Vedio4, url: "https://www.tiktok.com/@aboelnagadc/video/7559988525509266689" },
      { id: 2, title: "ابتسامة هوليود", duration: "1:55", src: Vedio7, url: "https://www.tiktok.com/@aboelnagadc/video/7570007804296072469" },
    ],
    reviews: [
      { id: 1, name: "هبة علي", rating: 5, comment: "دكتورة مريم غيرت شكل أسناني بالكامل، النتيجة طبيعية جداً", date: "منذ أسبوع" },
      { id: 2, name: "أحمد حسن", rating: 5, comment: "محترفة في التجميل، أنصح بيها", date: "منذ أسبوعين" },
      { id: 3, name: "ريم محمود", rating: 5, comment: "ابتسامتي بقت أحلى بفضل دكتورة مريم", date: "منذ شهر" },
    ],
  },
  {
    id: 3,
    nameAr: "د. هدير الفقي",
    nameEn: "Dr. Hadeer El Feky",
    roleAr: "أخصائية تركيبات الأسنان",
    specialtyAr: "أخصائية تركيبات الأسنان",
    img: Hadeer,
    bio: "أخصائية تركيبات الأسنان بخبرة واسعة في تصميم وتركيب التركيبات الثابتة والمتحركة بأعلى معايير الجودة.",
    stats: [
      { number: "1500+", label: "مريض سعيد" },
      { number: "6+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "100+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية تركيبات الأسنان",
      "خبرة في التركيبات الثابتة والمتحركة",
      "متخصصة في التركيبات على الزرعات",
      "أكثر من 1500 حالة ناجحة",
    ],
    specializations: [
      "تركيبات الأسنان الثابتة",
      "تركيبات الأسنان المتحركة",
      "تركيبات على الزرعات",
      "تاج و جسر",
      "تركيبات جزئية",
    ],
    videos: [],
    reviews: [
      { id: 1, name: "خالد إبراهيم", rating: 5, comment: "دكتورة هدير محترفة جداً في التركيبات، النتيجة ممتازة", date: "منذ أسبوع" },
      { id: 2, name: "فاطمة سعيد", rating: 5, comment: "تركيباتي طبيعية ومريحة، شكراً دكتورة", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 4,
    nameAr: "د. ندى فرحات",
    nameEn: "Dr. Nada Farahat",
    roleAr: "أخصائية حشو العصب والتركيبات",
    specialtyAr: "أخصائية حشو العصب والتركيبات",
    img: Nada,
    bio: "أخصائية في حشو العصب والحشوات التجميلية والتركيبات الثابتة، تسعى لإنقاذ الأسنان الطبيعية وتقديم علاج شامل.",
    stats: [
      { number: "2200+", label: "مريض سعيد" },
      { number: "8+", label: "سنة خبرة" },
      { number: "4.9", label: "تقييم" },
      { number: "130+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائية حشو العصب والتركيبات الثابتة",
      "خبرة في علاج الجذور المعقد",
      "متخصصة في الحشوات التجميلية",
      "أكثر من 2200 حالة ناجحة",
    ],
    specializations: [
      "حشو العصب",
      "علاج الجذور",
      "الحشوات التجميلية",
      "التركيبات الثابتة",
      "علاج الالتهابات",
    ],
    videos: [
      { id: 1, title: "الالتهابات", duration: "2:30", src: Vedio6, url: "https://www.tiktok.com/@aboelnagadc/video/7534740436607454465" },
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
      { id: 1, title: "التسوس الخفي", duration: "1:45", src: Vedio2, url: "https://www.tiktok.com/@aboelnagadc/video/7531054115451915528" },
      { id: 2, title: "حشو العصب", duration: "1:30", src: Vedio10, url: "https://www.tiktok.com/@aboelnagadc/video/7541388128326585618" },
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
      { id: 1, title: "زراعة الأسنان", duration: "0:50", src: Vedio1, url: "https://www.tiktok.com/@aboelnagadc/video/7554137350373133584" },
      { id: 2, title: "التهابات ضرس العقل", duration: "3:40", src: Vedio8, url: "https://www.tiktok.com/@aboelnagadc/video/7527343301104569608" },
      { id: 3, title: "زراعة الأسنان", duration: "4:00", src: Vedio11, url: "https://www.tiktok.com/@aboelnagadc/video/7539519366593858823" },
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
      { id: 1, title: "نزيف اللثة", duration: "4:20", src: Vedio5, url: "https://www.tiktok.com/@aboelnagadc/video/7562250183296240912" },
    ],
    reviews: [
      { id: 1, name: "أمل يوسف", rating: 5, comment: "دكتور أحمد محترف في حشو العصب، أنصح بيه", date: "منذ أسبوع" },
      { id: 2, name: "إبراهيم ناصر", rating: 5, comment: "علاج ممتاز وبدون ألم", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 10,
    nameAr: "د. أحمد جلال",
    nameEn: "Dr. Ahmed Galal",
    roleAr: "أخصائي الحشوات التجميلية وحشو العصب",
    specialtyAr: "أخصائي الحشوات التجميلية وحشو العصب",
    img: AhmedGalal,
    bio: "أخصائي في الحشوات التجميلية وحشو العصب والتركيبات، يجمع بين الدقة العلمية والاهتمام بالمظهر الجمالي.",
    stats: [
      { number: "2000+", label: "مريض سعيد" },
      { number: "8+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "120+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي الحشوات التجميلية وحشو العصب",
      "خبرة في علاج الأسنان الأمامية",
      "متخصص في مواد الحشو الحديثة",
      "أكثر من 2000 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "حشو العصب",
      "التركيبات",
      "ترميم الأسنان",
      "علاج التسوس",
    ],
    videos: [],
    reviews: [
      { id: 1, name: "منى سعيد", rating: 5, comment: "دكتور أحمد جلال شاطر جداً، حشواتي مش باينة خالص", date: "منذ أسبوع" },
      { id: 2, name: "وليد كمال", rating: 5, comment: "محترف ومتعاون", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 11,
    nameAr: "د. محمد صلاح",
    nameEn: "Dr. Mohamed Salah",
    roleAr: "أخصائي الحشوات التجميلية",
    specialtyAr: "أخصائي الحشوات التجميلية",
    img: Salah,
    bio: "أخصائي في الحشوات التجميلية، يركز على تقديم علاج يحافظ على مظهر الأسنان الطبيعي مع ضمان المتانة.",
    stats: [
      { number: "1300+", label: "مريض سعيد" },
      { number: "5+", label: "سنة خبرة" },
      { number: "4.8", label: "تقييم" },
      { number: "90+", label: "حالة شهرياً" },
    ],
    achievements: [
      "أخصائي الحشوات التجميلية",
      "خبرة في مواد الحشو composite",
      "متخصص في علاج التسوس",
      "أكثر من 1300 حالة ناجحة",
    ],
    specializations: [
      "الحشوات التجميلية",
      "علاج التسوس",
      "ترميم الأسنان",
      "حشو الأسنان الأمامية",
      "تجميل الابتسامة",
    ],
    videos: [],
    reviews: [
      { id: 1, name: "منى أحمد", rating: 5, comment: "دكتور صلاح ممتاز في الحشوات التجميلية", date: "منذ أسبوع" },
      { id: 2, name: "حسين محمد", rating: 5, comment: "شغل نظيف ومحترف", date: "منذ أسبوعين" },
    ],
  },
  {
    id: 12,
    nameAr: "د. أحمد ابراهيم",
    nameEn: "Dr. Ahmed Ibrahim",
    roleAr: "أخصائي الحشوات والتركيبات الثابتة",
    specialtyAr: "أخصائي الحشوات والتركيبات الثابتة",
    img: AhmedIbrahim2,
    bio: "أخصائي في الحشوات التجميلية والتركيبات الثابتة، يقدم حلولاً شاملة لترميم الأسنان واستعادة وظيفتها.",
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
      "ترmيم الأسنان",
    ],
    videos: [],
    reviews: [
      { id: 1, name: "سمية حسن", rating: 5, comment: "دكتور يوسف ممتاز ومحترف", date: "منذ أسبوع" },
      { id: 2, name: "باسم حسن", rating: 5, comment: "حشو عصب بدون ألم، شكراً دكتور", date: "منذ أسبوعين" },
    ],
  },
];

export const getDoctorById = (id) =>
  doctorsDetails.find((d) => String(d.id) === String(id)) ?? null;

export const detailsNavLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "المؤهلات والإنجازات", href: "#achievements" },
  { label: "التخصصات", href: "#specializations" },
  { label: "الفيديوهات", href: "#videos" },
  { label: "آراء المرضى", href: "#reviews" },
];
