import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Music2,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import MainLogo from "../../assets/images/main/MainLogo.png";
import { locations as branches, getDirectionsUrl } from "../../data/branches";

const Footer = () => {
  const { isDark } = useTheme();

  const quickLinks = [
    { text: "من نحن", href: "#about" },
    { text: "الخدمات", href: "#services" },
    { text: "الفريق", href: "#team" },
    { text: "قبل وبعد", href: "#results" },
    { text: "الفيديوهات", href: "#videos" },
    { text: "الفروع", href: "#locations" },
    { text: "اتصل بنا", href: "#contact" },
  ];

  const services = [
    { text: "طب الأسنان التجميلي", href: "#services" },
    { text: "تبييض الأسنان", href: "#services" },
    { text: "زراعة الأسنان", href: "#services" },
    { text: "التقويم الشفاف والمتحرك", href: "#services" },
    { text: "علاج الجذور", href: "#services" },
    { text: "الرعاية الوقائية", href: "#services" },
    { text: "طب أسنان الأطفال", href: "#services" },
    { text: "القشور الخزفية", href: "#services" },
  ];

  /* سطر مختصر لكل فرع: اسم المنطقة - أقرب علامة مميزة */
  const footerLine = (b) =>
    `${b.nameAr.replace("عيادات ", "")} - ${b.addressAr.split(" - ")[0]}`;

  const linkClass = isDark
    ? "text-gray-300 hover:text-blue-400"
    : "text-gray-300 hover:text-blue-500";
  const iconClass = isDark ? "text-blue-400" : "text-blue-500";

  return (
    <footer
      id="footer"
      className={`transition-colors duration-300 ${
        isDark ? "bg-[#0f1419] text-white" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-right">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="text-xl font-bold">عيادات أبو النجا</span>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={MainLogo}
                  alt="عيادات الدكتور أحمد أبو النجا"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              التميز في رعاية الأسنان مع لمسة شخصية.
              <br />
              شريكك الموثوق لابتسامة صحية وجميلة.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/AboelnagaDC"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                  isDark ? "bg-white/10 hover:bg-blue-500" : "bg-white/10 hover:bg-blue-600"
                }`}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aboelnagadc/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                  isDark ? "bg-white/10 hover:bg-pink-500" : "bg-white/10 hover:bg-pink-600"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@AboelnagaDC"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                  isDark ? "bg-white/10 hover:bg-gray-700" : "bg-white/10 hover:bg-gray-800"
                }`}
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className={`transition-colors ${linkClass}`}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.text}>
                  <a href={service.href} className={`transition-colors ${linkClass}`}>
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 flex-row-reverse items-start justify-end">
                <a href="tel:01227599182" className={`transition-colors ${linkClass}`}>
                  هاتف: 01227599182
                </a>
                <Phone className={`w-5 h-5 flex-shrink-0 ${iconClass}`} />
              </div>

              <div className="flex gap-3 flex-row-reverse items-start justify-end">
                <a
                  href="mailto:ask@drahmedaboelnaga.com"
                  className={`transition-colors ${linkClass}`}
                >
                  ask@drahmedaboelnaga.com
                </a>
                <Mail className={`w-5 h-5 flex-shrink-0 ${iconClass}`} />
              </div>

              {/* الفروع - بتتحدث أوتوماتيك من branches.js */}
              {branches.map((b) => (
                <div key={b.id} className="flex gap-3 flex-row-reverse items-start justify-end">
                  <a
                    href={getDirectionsUrl(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${linkClass}`}
                  >
                    {footerLine(b)}
                  </a>
                  <MapPin className={`w-5 h-5 flex-shrink-0 ${iconClass}`} />
                </div>
              ))}

              <div className="flex gap-3 flex-row-reverse items-start justify-end">
                <p className="text-gray-300">السبت-الخميس: 10 صباحاً - 10 مساءً</p>
                <Clock className={`w-5 h-5 flex-shrink-0 ${iconClass}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              جميع الحقوق محفوظة © {new Date().getFullYear()} عيادات أبو النجا
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className={`transition-colors ${isDark ? "hover:text-blue-400" : "hover:text-blue-500"}`}
              >
                سياسة الخصوصية
              </a>
              <a
                href="#terms"
                className={`transition-colors ${isDark ? "hover:text-blue-400" : "hover:text-blue-500"}`}
              >
                شروط الخدمة
              </a>
              <a
                href="#cookies"
                className={`transition-colors ${isDark ? "hover:text-blue-400" : "hover:text-blue-500"}`}
              >
                سياسة الكوكيز
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;