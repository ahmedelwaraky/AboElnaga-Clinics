import { useRef, useState } from "react";
import {
  Share2,
  Copy,
  MessageCircle,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  Mail,
  Play,
} from "lucide-react";
import { useTheme } from "../../core/createContext";
import { videos } from "../../data/reels-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import { Card, CardContent } from "../../shared/ui/Card";
import useFullscreenVideoFit from "../../shared/ui/Usefullscreenvideofit";

/* ── Dialog ───────────────────────────────────────────── */
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

const DialogContent = ({ className, children, onClose }) => (
  <div
    className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-lg mx-4 ${
      className || ""
    }`}
  >
    <button
      onClick={onClose}
      className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="sr-only">إغلاق</span>
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    {children}
  </div>
);

const DialogHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 mb-3 sm:mb-4">{children}</div>
);

const DialogTitle = ({ className, children }) => (
  <h2
    className={`text-base sm:text-lg font-semibold leading-none tracking-tight ${className || ""}`}
  >
    {children}
  </h2>
);

/* ── كارت الفيديو ─────────────────────────────────────────
   1) الشاشة السودا على الموبايل: preload="metadata" مش بيرسم فريم
      → poster لو متوفر، وإلا #t=0.1 عشان المتصفح يعمل seek ويرسم فريم.
   2) القص في وضع ملء الشاشة: object-cover بيفضل شغال
      → الحل في index.css عن طريق video:fullscreen { object-fit: contain }
──────────────────────────────────────────────────────── */
const VideoCard = ({ video, index, videoRefs, isDark, onPlay, onShare }) => {
  const [started, setStarted] = useState(false);

  const src = video.poster
    ? video.src
    : video.src.includes("#")
      ? video.src
      : `${video.src}#t=0.1`;

  const handlePlayClick = () => {
    const el = videoRefs.current[index];
    if (el) el.play();
  };

  return (
    <Card
      className={`group overflow-hidden cursor-pointer rounded-2xl md:rounded-3xl border-0 transition-transform duration-300 my-3 md:my-5 mx-1 md:mx-2 ${
        isDark ? "bg-[#1e293b] hover:scale-105" : "bg-white hover:scale-105"
      }`}
    >
      <CardContent className="p-0 relative">
        <div className="relative w-full h-full bg-gray-900 rounded-t-2xl md:rounded-t-3xl overflow-hidden">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={src}
            poster={video.poster || undefined}
            controls
            playsInline
            preload="metadata"
            /* object-cover داخل الكارت — و index.css بيحوّله لـ contain في fullscreen */
            className="app-video w-full h-full object-cover"
            onPlay={() => {
              setStarted(true);
              onPlay(index);
            }}
          />

          {/* زر تشغيل فوق الصورة - بيختفي أول ما الفيديو يشتغل */}
          {!started && (
            <button
              onClick={handlePlayClick}
              aria-label={`تشغيل ${video.titleAr}`}
              className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors hover:bg-black/25"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                <Play className="mr-0.5 h-6 w-6 fill-gray-900 text-gray-900 md:h-7 md:w-7" />
              </span>
            </button>
          )}

          {/* الفئة */}
          <div className="pointer-events-none absolute top-2 md:top-3 left-2 md:left-3 bg-yellow-400 text-gray-900 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-light shadow-lg">
            {video.categoryAr}
          </div>

          {/* المدة */}
          <div className="pointer-events-none absolute bottom-2 md:bottom-3 right-2 md:right-3 bg-gray-900/80 backdrop-blur-sm text-white px-1.5 md:px-2 py-0.5 rounded text-[10px] md:text-xs font-medium">
            {video.duration}
          </div>
        </div>

        {/* العنوان + الشير */}
        <div
          className={`flex items-center justify-between px-3 md:px-4 py-2 md:py-3 rounded-b-2xl md:rounded-b-3xl ${
            isDark ? "bg-[#1e293b]" : "bg-gray-100"
          }`}
        >
          <button
            onClick={() => onShare(video)}
            aria-label="مشاركة"
            className={`p-1.5 md:p-2 rounded-full transition-all hover:scale-110 ${
              isDark
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>

          <h3
            className={`text-xs md:text-sm font-semibold text-right flex-1 mr-2 line-clamp-1 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {video.titleAr}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

/* ── السيكشن ──────────────────────────────────────────── */
const ReelsVideos = () => {
  const { isDark } = useTheme();
  useFullscreenVideoFit(); // ← ضيف السطر ده

  const videoRefs = useRef([]);
  const [shareDialog, setShareDialog] = useState({ open: false, video: null });
  const [copied, setCopied] = useState(false);

  const handlePlay = (index) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });
  };

  const openShareDialog = (video) => {
    setShareDialog({ open: true, video });
    setCopied(false);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        className={`py-16 md:py-20 transition-colors duration-300 ${
          isDark ? "bg-[#0f1419]" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 md:h-20" />

          {/* العنوان */}
          <div className="text-center mb-10 md:mb-16">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              فيديوهات تعليمية وريلز
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6 md:mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              تعلم عن رعاية الأسنان وشاهد إجراءاتنا عملياً
            </p>

            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div
                className={`h-[2px] w-24 md:w-32 rounded-full ${
                  isDark
                    ? "bg-gradient-to-r from-transparent via-blue-400 to-blue-400"
                    : "bg-gradient-to-r from-transparent via-blue-500 to-blue-500"
                }`}
              />
              <div
                className={`h-[2px] w-24 md:w-32 rounded-full ${
                  isDark
                    ? "bg-gradient-to-l from-transparent via-blue-400 to-blue-400"
                    : "bg-gradient-to-l from-transparent via-blue-500 to-blue-500"
                }`}
              />
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-4 md:mt-6">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
              />
              <div
                className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
              />
              <div
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
              />
            </div>
          </div>

          {/* الكاروسيل */}
          <Carousel
            opts={{ align: "start", loop: true, direction: "rtl" }}
            autoplay={false}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem
                  key={video.id}
                  className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <VideoCard
                    video={video}
                    index={index}
                    videoRefs={videoRefs}
                    isDark={isDark}
                    onPlay={handlePlay}
                    onShare={openShareDialog}
                  />
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
            <DialogTitle
              className={`text-center ${isDark ? "text-white" : ""}`}
            >
              مشاركة الفيديو
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 sm:space-y-4">
            {shareDialog.video && (
              <p
                className={`text-center text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {shareDialog.video.titleAr}
              </p>
            )}

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
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
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all ${social.bgColor} group ${borderClass}`}
                    >
                      <IconComponent
                        className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 ${social.iconColor} transition-colors`}
                      />
                      <span
                        className={`text-[10px] sm:text-xs font-medium transition-colors ${textClass}`}
                      >
                        {social.name}
                      </span>
                    </a>
                  );
                })}
            </div>

            <div
              className={`pt-3 sm:pt-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={shareDialog.video?.url || ""}
                  readOnly
                  className={`flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  }`}
                />
                <button
                  onClick={() => copyToClipboard(shareDialog.video?.url)}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : isDark
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {copied ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-green-500 text-[10px] sm:text-xs mt-2 text-center font-medium">
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
