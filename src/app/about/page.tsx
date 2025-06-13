export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-gradient mb-12 text-4xl font-bold md:text-5xl">About Me</h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-metal-dark border-metal-chrome mb-8 rounded-lg border p-8">
            <h2 className="mb-4 text-2xl font-semibold">Hi, I&apos;m Joey</h2>
            <p className="text-metal-chrome leading-relaxed">{/* Personal bio and story coming in Phase 2 */}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-metal-dark border-metal-chrome rounded-lg border p-6">
              <h3 className="text-accent-green mb-4 text-xl font-semibold">Background</h3>
              <p className="text-metal-chrome">{/* Background details coming in Phase 2 */}</p>
            </div>

            <div className="bg-metal-dark border-metal-chrome rounded-lg border p-6">
              <h3 className="text-accent-green mb-4 text-xl font-semibold">Interests</h3>
              <p className="text-metal-chrome">{/* Interests and hobbies coming in Phase 2 */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
