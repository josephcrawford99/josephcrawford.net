import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <pre className="text-accent-green mb-8 font-mono text-sm">
          {`
    404
   ╱   ╲
  │ ● ● │
  │  ▼  │
   ╲___╱
   
  Page Not Found
`}
        </pre>
        <p className="text-metal-chrome mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="bg-accent-green text-metal-black hover:bg-accent-green-light inline-block rounded px-6 py-3 font-medium transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
