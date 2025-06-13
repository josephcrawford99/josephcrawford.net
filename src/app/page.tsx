"use client";

import { useRef } from "react";

export default function HomePage() {
  const workRef = useRef<HTMLElement>(null);

  const handleScrollToWork = () => {
    workRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display animate-fade-in mb-6 text-5xl font-bold md:text-7xl">
            <span className="text-gradient">Hi, I&apos;m Joey.</span>
          </h1>
          <p className="text-metal-silver animate-slide-up mb-8 text-xl md:text-2xl">
            I write code that works for people.
          </p>
          <div className="animate-slide-up flex justify-center gap-4" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={handleScrollToWork}
              className="bg-accent-green text-metal-black hover:bg-accent-green-light rounded px-6 py-3 font-medium transition-colors"
            >
              View My Work
            </button>
            <button
              className="border-metal-chrome text-metal-bright hover:bg-metal-dark rounded border px-6 py-3 font-medium transition-colors"
              onClick={() => alert("TODO: Link PDF here - Replace this alert with actual PDF download")}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Placeholder */}
      <section ref={workRef} className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display mb-12 text-center text-3xl font-bold md:text-4xl">Featured Work</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-metal-dark border-metal-chrome hover:border-metal-silver rounded-lg border p-6 transition-colors"
              >
                <div className="bg-metal-black mb-4 h-40 rounded" />
                <h3 className="mb-2 text-xl font-semibold">Project {i}</h3>
                <p className="text-metal-chrome">Project description placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Placeholder */}
      <section className="bg-metal-dark/30 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display mb-12 text-3xl font-bold md:text-4xl">Skills & Expertise</h2>
          <p className="text-metal-chrome">{/* Skills visualization coming in Phase 2 */}</p>
        </div>
      </section>
    </div>
  );
}
