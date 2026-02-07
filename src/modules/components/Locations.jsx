import { MapPin, Phone, Clock, Headphones } from "lucide-react";
import { Card, CardContent } from "../../shared/ui/Card";
import { useTheme } from "../../core/createContext";
import  {locations}  from "../../data/branches";

const Locations = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="locations"
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-[#2a2a2a]" : "bg-[#e8e5dc]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-20"></div>

        {/* العنوان */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            فروعنا المريحة
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            قم بزيارتنا في أي من فروعنا الحديثة للحصول على أفضل تجربة طبية
          </p>
        </div>

        {/* الكروت */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark
                  ? "bg-[#243447] border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white border-gray-200 hover:border-blue-400/50 shadow-md"
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-2">
                <h3
                  className={`text-xl font-semibold flex items-center gap-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  <MapPin
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  {location.nameAr}
                </h3>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* الخريطة */}
                <div
                  className={`w-full h-56 rounded-xl overflow-hidden border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  {location.map ? (
                    <iframe
                      src={location.map}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    ></iframe>
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center text-sm ${
                        isDark
                          ? "bg-gradient-to-br from-blue-500/10 to-blue-400/10 text-gray-400"
                          : "bg-gradient-to-br from-blue-100/50 to-blue-50/50 text-gray-600"
                      }`}
                    >
                      الخريطة غير متاحة حالياً
                    </div>
                  )}
                </div>

                {/* البيانات */}
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <MapPin
                      className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {location.addressAr}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Headphones
                      className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    {location.tel && location.tel !== "قريباً" ? (
                      <a
                        href={`tel:${location.tel}`}
                        className={`hover:underline ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {location.tel}
                      </a>
                    ) : (
                      <span
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        قريباً
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Phone
                      className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    {location.phone && location.phone !== "قريباً" ? (
                      <a
                        href={`tel:${location.phone}`}
                        className={`hover:underline ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {location.phone}
                      </a>
                    ) : (
                      <span
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        قريباً
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Clock
                      className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {location.hoursAr}
                    </span>
                  </div>
                </div>

                {/* زر الاتجاهات */}
                {location.map && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.addressAr
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full mt-4 px-4 py-2 rounded-lg text-center font-bold transition-all hover:scale-105 ${
                      isDark
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    احصل على الاتجاهات
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;