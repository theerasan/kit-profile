import SectionHeading, { icons } from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800/50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={icons.cap}>Education</SectionHeading>

        <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-900/40 flex items-center justify-center">
            <svg className="w-7 h-7 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
              Bachelor's Degree in Computer Engineering
            </h3>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
              Prince of Songkla University, Songkhla Hat Yai
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">2006 – 2010</p>
          </div>
        </div>
      </div>
    </section>
  )
}
