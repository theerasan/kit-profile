const jobs = [
  {
    company: 'AMPOS Solution Co., Ltd.',
    location: 'Bangkok',
    role: 'Quality Assurance Engineer',
    period: 'Jan 2016 – Present',
    highlights: [
      'Promoted to trial Project Manager program (Aug 2017 – Present).',
      'Designed test plans, test cases, manual & automation testing, pair testing, and post-deploy testing.',
      'Worked closely with UX designers and developers on requirements, test cases, and automation environments.',
      'Communicated bug reports and severity assessments with QA manager, product manager, and product owner.',
      'Created environment stacks and prepared data for customers; provided ongoing customer support.',
    ],
  },
  {
    company: 'Ookbee Comics Co., Ltd.',
    location: 'Bangkok',
    role: 'Marketing & Communications Manager',
    period: 'Feb 2015 – Jan 2016',
    highlights: [
      'Led marketing planning, social media strategy, event organisation, and content editing.',
      'Analysed writer/reader feedback and competitor data to drive promotional campaigns.',
      'Built and managed a thriving online comics community.',
      'Collaborated with developers on new features, system design, and testing.',
    ],
  },
  {
    company: 'i Digital Connect Co., Ltd.',
    location: 'Bangkok',
    role: 'Game Marketing Planner & Game Project Manager',
    period: 'Oct 2013 – Feb 2015',
    highlights: [
      'Owned game marketing planning, event/update schedules, content editing, and game testing.',
      'Analysed game metrics, player feedback, and competitor data to inform strategy.',
      'Managed the gamemaster team for customer services, testing, and bug reporting.',
      'Coordinated with developer team for environments, data, and QA workflows.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800/50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white whitespace-nowrap">Experience</h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-4 top-1.5 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-800 shadow" />

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/40 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
