// src/shared/hooks/useFullscreenVideoFit.js
import { useEffect } from "react";

/**
 * بيخلي أي فيديو يدخل ملء الشاشة يظهر كامل بأبعاده (contain)
 * وبيرجّعه لوضعه الطبيعي (cover) لما يخرج.
 *
 * ليه JS مش CSS؟
 * كروم على الديسكتوب بيتعامل مع عنصر الفيديو في وضع fullscreen بشكل
 * بيخلي `video:fullscreen` مش دايماً بتتطبق. الـ inline style بيكسب دايماً.
 *
 * الاستخدام: نادي الهوك مرة واحدة في أي كومبوننت فيه فيديوهات.
 *   useFullscreenVideoFit();
 */
export const useFullscreenVideoFit = () => {
  useEffect(() => {
    const apply = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      document.querySelectorAll("video").forEach((v) => {
        const isFs = fsEl && (fsEl === v || fsEl.contains(v));
        if (isFs) {
          v.style.objectFit = "contain";
          v.style.width = "100%";
          v.style.height = "100%";
          v.style.background = "#000";
        } else {
          // تفريغ الـ inline style → الكلاس بتاع Tailwind (object-cover) يرجع يشتغل
          v.style.objectFit = "";
          v.style.width = "";
          v.style.height = "";
          v.style.background = "";
        }
      });
    };

    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
      "webkitbeginfullscreen", // iOS
      "webkitendfullscreen",
    ];

    events.forEach((e) => document.addEventListener(e, apply, true));
    return () => events.forEach((e) => document.removeEventListener(e, apply, true));
  }, []);
};

export default useFullscreenVideoFit;