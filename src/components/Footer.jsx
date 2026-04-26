export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-bold text-white mb-1">Prapan Wongaurwate</p>
            <p className="text-sm text-cyan-400">QA Engineer · Project Manager · Bangkok</p>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <a
              href="mailto:prapan.wongaurwate@gmail.com"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              prapan.wongaurwate@gmail.com
            </a>
            <a
              href="tel:+66815414181"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              +66 81-541-4181
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Prapan Wongaurwate. All rights reserved.</p>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
