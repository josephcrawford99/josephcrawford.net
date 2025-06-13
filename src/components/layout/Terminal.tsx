"use client";

import { useState, useEffect } from "react";

export default function Terminal() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide on mobile
  if (isMobile) {
    return null;
  }

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="bg-metal-dark/90 border-metal-chrome hover:border-metal-silver fixed right-4 bottom-4 rounded-lg border px-4 py-2 backdrop-blur-md transition-colors"
        aria-label="Show terminal"
      >
        <span className="text-metal-silver font-mono text-sm">Show Terminal</span>
      </button>
    );
  }

  return (
    <div className="fixed right-4 bottom-4 left-4 mx-auto max-w-3xl">
      <div className="bg-metal-dark/90 border-metal-chrome rounded-lg border p-4 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="text-metal-chrome font-mono text-xs">terminal</span>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-metal-chrome hover:text-metal-bright transition-colors"
            aria-label="Minimize terminal"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
        </div>
        <div className="text-metal-silver font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent-green">joey@portfolio</span>
            <span className="text-metal-chrome">~</span>
            <span className="text-metal-bright">$</span>
            <span className="animate-pulse">_</span>
          </div>
          <p className="text-metal-chrome mt-2 text-xs">{/* Terminal interface coming in Phase 3 */}</p>
        </div>
      </div>
    </div>
  );
}
