import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen border border-black/10">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left column */}
        <div className="w-full md:w-1/3 border-r border-black/10 p-8 flex flex-col justify-between left-column">
          <div>
            <h1 className="text-2xl font-normal mb-1">Valerie Zhang</h1>
            <div className="border-top mb-8"></div>

            <p className="mb-8 location-info">
              Just another software developer.<br />
              Currently living in Sydney.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="section-title">About.</h2>
                <Link href="/about" className="detail-link">&gt; Detail</Link>
              </div>

              <div>
                <h2 className="section-title">Project.</h2>
                <Link href="/projects" className="detail-link">&gt; Detail</Link>
              </div>

              <div>
                <h2 className="section-title">Contact.</h2>
                <Link href="/contact" className="detail-link">&gt; Detail</Link>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <Link href="https://github.com/valericz" target="_blank" aria-label="GitHub">
              <svg
                className="social-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-2/3 p-8 flex items-center justify-center">
          <div className="max-w-2xl">
            <blockquote className="quote text-lg md:text-xl">
              "Above all, don't lie to yourself. The man who lies to
              himself and listens to his own lie comes to a point
              that he cannot distinguish the truth within him, or
              around him, and so loses all respect for himself and
              for others. And having no respect he ceases to love."
              <footer className="text-right mt-4">
                — Fyodor Dostoevsky
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
