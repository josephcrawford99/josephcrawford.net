"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-gradient mb-8 text-4xl font-bold md:text-5xl">Resume</h1>

        {/* Download Button */}
        <div className="mb-12">
          <button
            className="bg-accent-green text-metal-black hover:bg-accent-green-light rounded px-6 py-3 font-medium transition-colors"
            onClick={() => alert("TODO: Link PDF here - Replace this alert with actual PDF download")}
          >
            Download PDF Resume
          </button>
        </div>

        {/* Resume Content Placeholder */}
        <div className="bg-metal-dark border-metal-chrome rounded-lg border p-8">
          <h2 className="mb-4 text-2xl font-semibold">Joseph Crawford</h2>
          <p className="text-metal-chrome mb-8">Full-Stack Developer</p>

          <div className="space-y-8">
            <section>
              <h3 className="text-accent-green mb-4 text-xl font-semibold">Experience</h3>
              <p className="text-metal-chrome">{/* Experience details coming in Phase 2 */}</p>
            </section>

            <section>
              <h3 className="text-accent-green mb-4 text-xl font-semibold">Education</h3>
              <p className="text-metal-chrome">{/* Education details coming in Phase 2 */}</p>
            </section>

            <section>
              <h3 className="text-accent-green mb-4 text-xl font-semibold">Skills</h3>
              <p className="text-metal-chrome">{/* Skills list coming in Phase 2 */}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
