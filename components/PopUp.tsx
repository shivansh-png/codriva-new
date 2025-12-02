"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DotLottie from "@/components/DotLottie";

const BOT_LOTTIE =
  "https://lottie.host/07b142ca-f04f-408b-b41d-e6385350b87c/DArSwGzDtk.lottie";

export default function ChatBotPopup({ delayMs = 4000 }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false); // bubble visible?
  const [ready, setReady] = useState(false); // delay passed?
  const [minimized, setMinimized] = useState(false); // bot small or big?

  // ✔ Reset popup whenever route changes
  useEffect(() => {
    // Reset everything on page change
    setVisible(false);
    setReady(false);
    setMinimized(false);

    const t = setTimeout(() => {
      setReady(true);
      setVisible(true);
      setMinimized(false);
    }, delayMs);

    return () => clearTimeout(t);
  }, [pathname, delayMs]); // <— KEY: pathname triggers reset

  const closeBubble = () => {
    setVisible(false);
    setMinimized(true); // shrink bot
  };

  const reopen = () => {
    setVisible(true);
    setMinimized(false); // grow bot
  };

  if (pathname === "/contact") return null;
  if (!ready) return null; // nothing until delay completes

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {/* Bubble */}
      {visible && (
        <div className="relative animate-bubble -mr-2 -mb-12">
          <div
            className="cloud-wrapper relative"
            style={{ width: 220, height: 110 }}
          >
            {/* CLICKABLE WHOLE CLOUD */}
            <a
              href="/contact"
              className="absolute inset-0 block"
              style={{ zIndex: 5 }}
            ></a>

            {/* SHRUNK SVG */}
            <svg
              className="cloud-svg"
              width="220"
              height="110"
              viewBox="0 0 340 180"
              fill="white"
              stroke="#9cc8ff"
              strokeWidth="4"
              style={{
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                transform: "scale(0.92)", // shrink everything
                transformOrigin: "top left",
              }}
            >
              <path
                d="
          M90 120
          C30 120, 30 45, 80 45
          C95 10, 135 10, 155 45
          C190 5, 250 5, 275 60
          C330 60, 335 135, 280 150
          C235 185, 145 185, 105 150
          C60 165, 40 150, 90 120
        "
              />

              {/* Tail */}
              <path
                d="M275 140 C305 155, 310 175, 285 185"
                fill="white"
                stroke="#9cc8ff"
                strokeWidth="4"
              />
            </svg>

            {/* CENTERED TEXT */}
            <div
              className="cloud-text"
              style={{
                pointerEvents: "none",
                zIndex: 50,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="font-semibold text-[15px] text-[#24292f]">
                Free consultation
              </span>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeBubble();
              }}
              className="absolute top-1 right-5 w-7 h-7 bg-gray-300 text-gray-700 rounded-full text-base flex items-center justify-center shadow"
              style={{ zIndex: 60 }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Bot Animation */}
      <button
        onClick={() => {
          if (minimized) {
            // Small bot → reopen bubble
            reopen();
          } else {
            // Big bot → go to contact page
            window.location.href = "/contact";
          }
        }}
        aria-label="Open bot"
        className={`transition-all duration-300 ease-out hover:scale-105 ${
          ready && !minimized ? "animate-bot" : ""
        }`}
        style={{
          width: minimized ? "100px" : "250px",
          height: minimized ? "100px" : "250px",
        }}
      >
        <DotLottie
          src={BOT_LOTTIE}
          autoplay={true}
          loop={true}
          className="w-full h-full"
        />
      </button>

      <style jsx>{`
        .cloud-wrapper {
          position: relative;
          width: 300px;
          height: 150px;
        }

        .cloud-svg {
          position: absolute;
          top: 0;
          left: 0;
        }

        .cloud-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          white-space: nowrap;
        }

        .cloud-bubble {
          background: #a4c2ebff;
          border: 2px solid #9cc8ff;
          padding: 10px 16px;
          border-radius: 20px;
          position: relative;
          font-size: 14px;
          box-shadow: 0 6px 18px rgba(0, 80, 200, 0.12);
        }

        .cloud-bubble:after {
          content: "";
          position: absolute;
          right: -14px;
          bottom: 8px;
          width: 20px;
          height: 20px;

          /* Cloud-like tail */
          background: #ffffff;
          border: 2px solid #9cc8ff;
          border-left: none;
          border-top: none;

          border-bottom-right-radius: 30px;
          transform: rotate(45deg);
          box-shadow: 4px 4px 12px rgba(0, 80, 200, 0.12);
        }
        .animate-bubble {
          animation: slideInStrong 650ms cubic-bezier(0.01, 0.76, 0.91, 0.16);
        }

        @keyframes slideInStrong {
          from {
            opacity: 1;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* BOT SLIDE-IN ANIMATION */
        .animate-bot {
          animation: botSlideIn 450ms cubic-bezier(0.93, 0.01, 0.38, 0.99);
        }

        @keyframes botSlideIn {
          from {
            opacity: 1;
            transform: translateX(80px); /* stronger movement */
          }
          80% {
            transform: translateX(-8px); /* small overshoot */
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
