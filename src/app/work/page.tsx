export default function WorkPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-gradient mb-12 text-4xl font-bold md:text-5xl">My Work</h1>

        {/* Project Grid Placeholder */}
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-metal-dark border-metal-chrome hover:border-metal-silver overflow-hidden rounded-lg border transition-colors">
                <div className="bg-metal-black h-64" />
                <div className="p-6">
                  <h3 className="group-hover:text-gradient mb-2 text-2xl font-semibold transition-all">
                    Project Title {i}
                  </h3>
                  <p className="text-metal-chrome mb-4">
                    Brief project description goes here. This will be replaced with actual project details.
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-metal-black rounded px-3 py-1 text-xs">React</span>
                    <span className="bg-metal-black rounded px-3 py-1 text-xs">TypeScript</span>
                    <span className="bg-metal-black rounded px-3 py-1 text-xs">Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
