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
        <div className="relative animate-bubble">
          <div className="bg-green-100 shadow-lg rounded-xl px-4 py-2 text-sm font-medium border border-green-300 text-gray-900 relative">
            <a href="/contact">Free consultation</a>

            {/* Tail */}
            <div className="absolute -bottom-2 right-4 w-3 h-3 bg-green-100 border-b border-r border-green-300 rotate-45"></div>
          </div>

          {/* Close button */}
          <button
            onClick={closeBubble}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 text-gray-700 rounded-full text-xs flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

      {/* Bot Animation */}
      <button
  onClick={reopen}
  aria-label="Open bot"
  className={`transition-all duration-300 ease-out hover:scale-105 ${ready && !minimized ? "animate-bot" : ""}`}
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
  .animate-bubble {
    animation: slideInStrong 650ms cubic-bezier(.01,.76,.91,.16);
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
    animation: botSlideIn 450ms cubic-bezier(.93,.01,.38,.99);
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
