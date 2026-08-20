// src/data/branches.js

export const locations = [
  {
    id: "shibin",
    nameAr: "عيادات شبين الكوم",
    nameEn: "Shibin El Kom Clinic",
    cityAr: "شبين الكوم",
    addressAr: "آخر شارع الجلاء - تقاطع شارع باريس - شبين الكوم - المنوفية",
    addressEn: "End of El Galaa St. - Paris St. intersection - Shibin El Kom - Menoufia",
    tel: "0482322448",
    phone: "01023334834",
    email: "",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    fridayAr: "الجمعة :-  5 مساءً : 11 مساءً",
    fridayEn: "Fri: 5pm : 11pm",
    // ساعات رقمية للمنطق (24h) — [بداية، نهاية]
    schedule: { weekday: [10, 22], friday: [17, 23] },
    lat: 30.5701077,
    lng: 31.0067164,
    map: "https://maps.google.com/maps?q=30.5701077,31.0067164&z=17&hl=ar&output=embed",
  },
  {
    id: "quesna",
    nameAr: "عيادات قويـسنا",
    nameEn: "Quesna Clinic",
    cityAr: "قويسنا",
    addressAr: "أمام البنك الأهلي القديم - قويسنا - المنوفية",
    addressEn: "In front of the National Bank - Quesna - Menoufia",
    tel: "0482575564",
    phone: "01227599182",
    email: "downtown@dentalcare.com",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    fridayAr: "الجمعة :-  2 ظهراً : 8 مساءً",
    fridayEn: "Fri: 2pm : 8pm",
    schedule: { weekday: [10, 22], friday: [14, 20] },
    lat: 30.5506934,
    lng: 31.1044828,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27487.60659373256!2d31.1044828743164!3d30.550693400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d9f56e16e0d5%3A0xd3ec8f3b8e96f084!2z2KfZhNio2YbZgyDYp9mE2KfZh9mE2Ykg2KfZhNmF2LXYsdmKINmB2LHYuSDZgtmI2YrYs9mG2KcgLSBOQkUgUXdlc25hIEJyYW5jaA!5e0!3m2!1sen!2seg!4v1762806816125!5m2!1sen!2seg",
  },
  {
    id: "taha-shubra",
    nameAr: "عيادات طه شبرا",
    nameEn: "Taha Shubra Clinic",
    cityAr: "طه شبرا",
    addressAr: "أمام البنك الزراعي - طه شبرا - المنوفية",
    addressEn: "In front of the Agricultural Bank - Taha Shubra - Menoufia",
    tel: "0482487272",
    phone: "01040467770",
    email: "maadi@dentalcare.com",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    fridayAr: "الجمعة :-  2 ظهراً : 8 مساءً",
    fridayEn: "Fri: 2pm : 8pm",
    schedule: { weekday: [10, 22], friday: [14, 20] },
    lat: 30.5325399,
    lng: 31.09682,
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d429.57415070783975!2d31.09682001622604!3d30.53253997620538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d9e1b5629d97%3A0x8aab8f10f0257c73!2z2KfZhNmI2K3Yr9ipINin2YTZhdit2YTYqSDYqNi32Ycg2LTYqNix2Kc!5e0!3m2!1sen!2seg!4v1762807081766!5m2!1sen!2seg",
  },
  {
    id: "om-khenan",
    nameAr: "عيادات العجايزة",
    nameEn: "Om Khenan Clinic",
    cityAr: "أم خنان",
    addressAr: "أمام موقف أم خنان - بجوار صيدلية دكتورة صابرين - المنوفية",
    addressEn: "In front of Om Khenan station - next to Dr. Sabreen Pharmacy - Quesna - Menoufia",
    tel: "0482567634",
    phone: "01070103436",
    email: "",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    fridayAr: "الجمعة :-  5 مساءً : 11 مساءً",
    fridayEn: "Fri: 5pm : 11pm",
    schedule: { weekday: [10, 22], friday: [17, 23] },
    lat: 30.5122714,
    lng: 31.0919087,
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19444.36181272969!2d31.091908766486135!3d30.512271495424578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d83b8e312205%3A0x460d9424d911dc48!2z2YXYsdmD2LIg2LTYqNin2Kgg2KfZhNi52KzYp9mK2LLZhw!5e0!3m2!1sar!2seg!4v1762808165744!5m2!1sar!2seg",
  },
];

/** رابط اتجاهات دقيق مبني على الإحداثيات (مش على نص العنوان) */
export const getDirectionsUrl = (loc) =>
  `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;

/** واتساب برسالة جاهزة فيها اسم الفرع */
export const getWhatsappUrl = (loc) =>
  `https://wa.me/2${String(loc.phone).replace(/\D/g, "")}?text=${encodeURIComponent(
    `السلام عليكم، حابب أحجز موعد في ${loc.nameAr}`
  )}`;

/** هل الفرع مفتوح دلوقتي؟ (بتوقيت القاهرة، ومواعيد الجمعة مختلفة لكل فرع) */
export const isBranchOpen = (loc, date = new Date()) => {
  const now = new Date(date.toLocaleString("en-US", { timeZone: "Africa/Cairo" }));
  const hour = now.getHours() + now.getMinutes() / 60;
  const [from, to] =
    now.getDay() === 5 ? loc.schedule.friday : loc.schedule.weekday;
  return hour >= from && hour < to;
};

/** المسافة بالكيلومتر بين نقطتين */
export const distanceKm = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export default locations;