"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <pre className="mb-8 font-mono text-sm text-red-500">
          {`
   ERROR
  ╱     ╲
 │ ╳   ╳ │
 │   ___  │
  ╲_____╱
  
Something went wrong!
`}
        </pre>
        <p className="text-metal-chrome mb-8">An unexpected error occurred.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="border-metal-chrome text-metal-bright hover:bg-metal-dark rounded border px-6 py-3 font-medium transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-accent-green text-metal-black hover:bg-accent-green-light rounded px-6 py-3 font-medium transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
