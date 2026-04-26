import SectionHeading, { icons } from './SectionHeading'

const strengths = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Learning',
    desc: 'Quickly picks up new tools, frameworks, and domains without losing quality.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Multitasking',
    desc: 'Handles multiple parallel workstreams — test plans, automation, and stakeholder comms simultaneously.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Adaptability',
    desc: 'Thrives across QA, marketing, and project management roles — always delivering.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800/50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={icons.user}>About Me</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
              I'm a Software Quality Assurance engineer with over <strong className="text-slate-800 dark:text-white">10 years of experience</strong> delivering high-quality products across Android, iOS, Web, and Desktop platforms — including 8+ years focused on QA leadership and test automation.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My background spans both technical QA — test design, automation frameworks, pair testing — and broader roles in product marketing and project management. I'm passionate about building innovative, user-centric products and I thrive in collaborative, fast-moving environments.
            </p>
          </div>

          <div className="grid gap-4">
            {strengths.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors"
              >
                <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white mb-0.5">{title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
