export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-white py-24 sm:py-32">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full ring-4 ring-cyan-400/50 overflow-hidden bg-slate-700 shadow-2xl">
            <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl font-bold text-cyan-300 select-none">
              PW
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Open to Opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            Prapan<br className="hidden sm:block" /> Wongaurwate
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-cyan-300 mb-5">
            QA Engineer &amp; Project Manager
          </p>
          <p className="text-slate-300 max-w-xl leading-relaxed mb-7 text-sm sm:text-base">
            5+ years crafting quality software through rigorous test design, automation, and cross-functional collaboration — from mobile apps to enterprise platforms.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-7">
            <a
              href="mailto:prapan.wongaurwate@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              prapan.wongaurwate@gmail.com
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +66 81-541-4181
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Bangkok, Thailand
            </span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="#experience"
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 font-semibold text-sm text-white transition-colors shadow-lg shadow-cyan-500/30"
            >
              View Experience
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 font-semibold text-sm text-white transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
