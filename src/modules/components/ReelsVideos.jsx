import { useRef, useState } from "react";
import { Share2, Copy, MessageCircle, Check, Facebook, Twitter, Linkedin, Send, Mail } from "lucide-react";
import { useTheme } from "../../core/createContext";
import  {videos}  from "../../data/reels-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import { Card, CardContent } from "../../shared/ui/Card";

// Simple Dialog Component
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50">{children}</div>
    </div>
  );
};

const DialogContent = ({ className, children, onClose }) => {
  return (
    <div
      className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-lg mx-4 ${className || ""}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="sr-only">Close</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {children}
    </div>
  );
};

const DialogHeader = ({ children }) => {
  return <div className="flex flex-col space-y-1.5 mb-4">{children}</div>;
};

const DialogTitle = ({ className, children }) => {
  return (
    <h2 className={`text-lg font-semibold leading-none tracking-tight ${className || ""}`}>
      {children}
    </h2>
  );
};

const ReelsVideos = () => {
  const { isDark } = useTheme();
  const videoRefs = useRef([]);
  const [shareDialog, setShareDialog] = useState({ open: false, video: null });
  const [copied, setCopied] = useState(false);

  // لما فيديو يشتغل → نوقف الباقي
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  // فتح نافذة المشاركة
  const openShareDialog = (video) => {
    setShareDialog({ open: true, video });
    setCopied(false);
  };

  // نسخ الرابط
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // منصات التواصل الاجتماعي
  const getSocialLinks = (video) => {
    const text = video.titleAr;
    const url = video.url;

    return [
      {
        name: "WhatsApp",
        icon: MessageCircle,
        url: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        bgColor: "hover:bg-green-500",
        iconColor: "text-green-600 group-hover:text-white",
      },
      {
        name: "Facebook",
        icon: Facebook,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        bgColor: "hover:bg-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
      },
      {
        name: "Twitter",
        icon: Twitter,
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        bgColor: "hover:bg-sky-500",
        iconColor: "text-sky-500 group-hover:text-white",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        bgColor: "hover:bg-blue-700",
        iconColor: "text-blue-700 group-hover:text-white",
      },
      {
        name: "Telegram",
        icon: Send,
        url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        bgColor: "hover:bg-blue-400",
        iconColor: "text-blue-400 group-hover:text-white",
      },
      {
        name: "Email",
        icon: Mail,
        url: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`,
        bgColor: "hover:bg-gray-600",
        iconColor: "text-gray-600 group-hover:text-white",
      },
    ];
  };

  return (
    <>
      <section
        id="videos"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-[#0f1419]" : "bg-gray-100"
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
              فيديوهات تعليمية وريلز
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              تعلم عن رعاية الأسنان وشاهد إجراءاتنا عملياً
            </p>
          </div>

          {/* الكاروسيل */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            autoplay={false}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video, index) => (
                <CarouselItem
                  key={video.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Card
                    className={`group overflow-hidden cursor-pointer rounded-3xl border-0 transition-transform duration-300 my-5 mx-2 ${
                      isDark
                        ? "bg-[#1e293b] hover:scale-105"
                        : "bg-white hover:scale-105"
                    }`}
                  >
                    <CardContent className="p-0 relative">
                      {/* الفيديو - ياخد كل المساحة */}
                      <div className="relative w-full h-full">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={video.src}
                          controls
                          preload="metadata"
                          className="w-full h-full object-cover rounded-t-3xl"
                          onPlay={() => handlePlay(index)}
                        />

                        {/* الفئة - في الأعلى على اليسار */}
                        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-light shadow-lg">
                          {video.categoryAr}
                        </div>

                        {/* المدة - في الأسفل على اليمين */}
                        <div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-medium">
                          {video.duration}
                        </div>
                      </div>

                      {/* العنوان + الشير - في الأسفل */}
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-b-3xl ${
                          isDark ? "bg-[#1e293b]" : "bg-gray-100"
                        }`}
                      >
                        {/* زر المشاركة - على اليسار */}
                        <button
                          onClick={() => openShareDialog(video)}
                          className={`p-2 rounded-full transition-all hover:scale-110 ${
                            isDark
                              ? "text-white hover:bg-white/10"
                              : "text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <Share2 className="w-4 h-4" />
                        </button>

                        {/* العنوان - على اليمين */}
                        <h3
                          className={`text-sm font-semibold text-right flex-1 mr-2 line-clamp-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {video.titleAr}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* نافذة المشاركة */}
      <Dialog
        open={shareDialog.open}
        onOpenChange={(open) => setShareDialog({ open, video: null })}
      >
        <DialogContent
          className={isDark ? "bg-[#2a2a2a] border-gray-700 text-white" : ""}
          onClose={() => setShareDialog({ open: false, video: null })}
        >
          <DialogHeader>
            <DialogTitle className={`text-center ${isDark ? "text-white" : ""}`}>
              مشاركة الفيديو
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* عنوان الفيديو */}
            {shareDialog.video && (
              <p
                className={`text-center text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {shareDialog.video.titleAr}
              </p>
            )}

            {/* منصات التواصل الاجتماعي */}
            <div className="grid grid-cols-3 gap-3">
              {shareDialog.video &&
                getSocialLinks(shareDialog.video).map((social) => {
                  const IconComponent = social.icon;
                  const borderClass = isDark
                    ? "border-gray-700 hover:border-transparent"
                    : "border-gray-200 hover:border-transparent";
                  const textClass = isDark
                    ? "text-gray-300 group-hover:text-white"
                    : "text-gray-600 group-hover:text-white";

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${social.bgColor} group ${borderClass}`}
                    >
                      <IconComponent
                        className={`w-8 h-8 mb-2 ${social.iconColor} transition-colors`}
                      />
                      <span
                        className={`text-xs font-medium transition-colors ${textClass}`}
                      >
                        {social.name}
                      </span>
                    </a>
                  );
                })}
            </div>

            {/* نسخ الرابط */}
            <div
              className={`pt-4 border-t ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={shareDialog.video?.url || ""}
                  readOnly
                  className={`flex-1 px-3 py-2 text-sm border rounded-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  }`}
                />
                <button
                  onClick={() => copyToClipboard(shareDialog.video?.url)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : isDark
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-green-500 text-xs mt-2 text-center font-medium">
                  تم نسخ الرابط!
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReelsVideos;