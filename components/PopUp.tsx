"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DotLottie from "@/components/DotLottie";

const BOT_LOTTIE =
  "https://lottie.host/07b142ca-f04f-408b-b41d-e6385350b87c/DArSwGzDtk.lottie";

export default function ChatBotPopup({ delayMs = 4000 }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    setVisible(false);
    setReady(false);
    setMinimized(false);

    const t = setTimeout(() => {
      setReady(true);
      setVisible(true);
      setMinimized(false);
    }, delayMs);

    return () => clearTimeout(t);
  }, [pathname, delayMs]);

  const closeBubble = () => {
    setVisible(false);
    setMinimized(true);
  };

  const reopen = () => {
    setVisible(true);
    setMinimized(false);
  };

  if (pathname === "/contact") return null;
  if (!ready) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">

      {/* Bubble */}
      {visible && (
        <div className="relative animate-bubble -mr-2 -mb-10">
          <div
            className="cloud-wrapper"
            style={{
              width: minimized ? "16vw" : "22vw",
              height: minimized ? "7vw" : "10vw",

              minWidth: minimized ? "140px" : "180px",
              minHeight: minimized ? "55px" : "80px",

              maxWidth: minimized ? "200px" : "280px",
              maxHeight: minimized ? "90px" : "130px",
            }}
          >
            <a
              href="/contact"
              className="absolute inset-0 block"
              style={{ zIndex: 5 }}
            ></a>

            {/* Scalable SVG */}
            <svg
              className="cloud-svg"
              viewBox="0 0 340 180"
              fill="#f0f7ff"
              stroke="#88b4ff"
              strokeWidth="9"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "scale(0.92)",
                transformOrigin: "top left",
                zIndex: 1,
              }}
            >
              <path d="
                  M90 120
                  C30 120, 30 45, 80 45
                  C95 10, 135 10, 155 45
                  C190 5, 250 5, 275 60
                  C330 60, 335 135, 280 150
                  C235 185, 145 185, 105 150
                  C60 165, 40 150, 90 120
              " />

              <path
                d="M275 140 C305 155, 310 175, 285 185"
                fill="#f0f7ff"
                stroke="#88b4ff"
                strokeWidth="9"
              />
            </svg>

            {/* Centered text */}
            <div
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
                Free Consultation
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeBubble();
              }}
              className="absolute top-1 right-4 w-6 h-6 bg-gray-300 text-gray-700 rounded-full text-base flex items-center justify-center shadow"
              style={{ zIndex: 60 }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Bot */}
      <button
        onClick={() =>
          minimized ? reopen() : (window.location.href = "/contact")
        }
        aria-label="Open bot"
        className={`transition-all duration-300 ease-out hover:scale-105 ${
          ready && !minimized ? "animate-bot" : ""
        }`}
        style={{
          width: minimized ? "18vw" : "32vw",
          height: minimized ? "18vw" : "32vw",
          maxWidth: minimized ? "90px" : "290px",
          maxHeight: minimized ? "90px" : "290px",
          minWidth: minimized ? "60px" : "140px",
          minHeight: minimized ? "60px" : "140px",
        }}
      >
        <DotLottie
          src={BOT_LOTTIE}
          autoplay
          loop
          className="w-full h-full"
        />
      </button>

      <style jsx>{`
        .cloud-wrapper {
          position: relative;
        }
        .animate-bubble {
          animation: slideInStrong 650ms cubic-bezier(0.01, 0.76, 0.91, 0.16);
        }
        @keyframes slideInStrong {
          from {
            transform: translateX(60px);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-bot {
          animation: botSlideIn 450ms cubic-bezier(0.93, 0.01, 0.38, 0.99);
        }
        @keyframes botSlideIn {
          from {
            transform: translateX(80px);
          }
          80% {
            transform: translateX(-8px);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
