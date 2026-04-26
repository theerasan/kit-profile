const categories = [
  {
    label: 'QA & Testing',
    color: 'cyan',
    skills: ['Software QA', 'Test Cases', 'Test Design', 'Test Plan', 'Manual Testing', 'A/B Testing', 'Game Testing', 'Pair Testing', 'Post-Deploy Testing'],
  },
  {
    label: 'Automation',
    color: 'sky',
    skills: ['Robot Framework', 'Ranorex', 'Espresso', 'Android Automation', 'iOS Automation', 'Web Automation', 'Desktop Automation'],
  },
  {
    label: 'Tools & Platforms',
    color: 'teal',
    skills: ['JIRA', 'Jenkins', 'Test Link', 'SQL', 'UX'],
  },
  {
    label: 'Methodologies',
    color: 'indigo',
    skills: ['Agile', 'SCRUM', 'Kanban', 'Lean', 'Project Management'],
  },
  {
    label: 'Marketing & Community',
    color: 'violet',
    skills: ['Gamification', 'Game Design', 'Game Marketing Planning', 'Social Media Marketing', 'Community Management', 'Facebook Fan Page Strategy', 'Event Planning'],
  },
]

const colorMap = {
  cyan:   'bg-cyan-50   dark:bg-cyan-900/30   text-cyan-700   dark:text-cyan-300   border-cyan-200   dark:border-cyan-800',
  sky:    'bg-sky-50    dark:bg-sky-900/30    text-sky-700    dark:text-sky-300    border-sky-200    dark:border-sky-800',
  teal:   'bg-teal-50   dark:bg-teal-900/30   text-teal-700   dark:text-teal-300   border-teal-200   dark:border-teal-800',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  violet: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
}

const headingMap = {
  cyan:   'text-cyan-600   dark:text-cyan-400',
  sky:    'text-sky-600    dark:text-sky-400',
  teal:   'text-teal-600   dark:text-teal-400',
  indigo: 'text-indigo-600 dark:text-indigo-400',
  violet: 'text-violet-600 dark:text-violet-400',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white whitespace-nowrap">Skills</h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, color, skills }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${headingMap[color]}`}>
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${colorMap[color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
