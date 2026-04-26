const stats = [
  {
    value: '10+',
    label: 'Years in QA & Product',
    color: 'cyan',
    gradient: 'from-cyan-500 to-sky-600 dark:from-cyan-400 dark:to-sky-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Projects Shipped',
    color: 'violet',
    gradient: 'from-violet-500 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    value: '4',
    label: 'Companies',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: '2–4',
    label: 'QA Engineers Led',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const iconBg = {
  cyan:    'bg-cyan-50    dark:bg-cyan-900/40    text-cyan-600    dark:text-cyan-400',
  violet:  'bg-violet-50  dark:bg-violet-900/40  text-violet-600  dark:text-violet-400',
  amber:   'bg-amber-50   dark:bg-amber-900/40   text-amber-600   dark:text-amber-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400',
}

export default function Stats() {
  return (
    <section className="py-12 bg-white dark:bg-slate-800/40 border-y border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
          {stats.map(({ value, label, color, gradient, icon }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${iconBg[color]}`}>
                {icon}
              </div>
              <p className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-br bg-clip-text text-transparent ${gradient}`}>
                {value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
