import SectionHeading, { icons } from './SectionHeading'

const projects = [
  {
    name: 'eatigo Mobile Application',
    company: 'Eatigo Co., Ltd.',
    tag: 'Android · iOS · Web',
    tagColor: 'cyan',
    desc: 'Restaurant reservation platform offering time-based discounts of up to 50% at thousands of venues. Free for users to book tables via app or website — no prepayments or coupons — to dine at restaurants, hotels, and cafés during off-peak hours.',
  },
  {
    name: 'eatigo eMerchant Web',
    company: 'Eatigo Co., Ltd.',
    tag: 'Partner Platform',
    tagColor: 'sky',
    desc: 'Restaurant data management platform that allows partners to configure their menus and prices.',
  },
  {
    name: 'eatigo Web Admin',
    company: 'Eatigo Co., Ltd.',
    tag: 'Internal Tools',
    tagColor: 'indigo',
    desc: 'Administrator platform used to configure and manage eatigo systems across the product suite.',
  },
  {
    name: 'eatigo eBilling',
    company: 'Eatigo Co., Ltd.',
    tag: 'FinTech / Billing',
    tagColor: 'teal',
    desc: 'Billing management platform used to manage billing systems for eatigo\'s partners.',
  },
  {
    name: 'Smart Workers Smart Money',
    company: 'AMPOS Solution Co., Ltd.',
    tag: 'EdTech / Mobile',
    tagColor: 'teal',
    desc: 'Financial literacy mobile learning app for factory workers, covering goal-setting, savings, spending, and debt management through interactive micro-lessons and gamified modules.',
  },
  {
    name: 'Happy Family',
    company: 'AMPOS Solution Co., Ltd.',
    tag: 'Gamification',
    tagColor: 'sky',
    desc: 'Financial simulation game where players manage revenue, expenses, liabilities, and savings while navigating real-world financial challenges to build a successful career.',
  },
  {
    name: 'Ookbee Comics',
    company: 'Ookbee Comics Co., Ltd.',
    tag: 'Web & Mobile Platform',
    tagColor: 'violet',
    desc: 'Web and mobile platform for comics artists, writers, bloggers, and readers to share work and build reputation within a creative community.',
  },
  {
    name: 'Ookbee Comics Facebook Fan Page',
    company: 'Ookbee Comics Co., Ltd.',
    tag: 'Community & Marketing',
    tagColor: 'indigo',
    desc: 'Community fan page for promoting comics and illustrators, organising online/offline events, and building an engaged writer & reader community.',
  },
  {
    name: 'Comic Cross',
    company: 'i Digital Connect Co., Ltd.',
    tag: 'Mobile Game',
    tagColor: 'rose',
    desc: 'Turn-based strategy card game on mobile designed for comic lovers, combining engaging gameplay with a rich narrative universe.',
  },
]

const tagMap = {
  cyan: 'bg-cyan-50   dark:bg-cyan-900/30   text-cyan-700   dark:text-cyan-300',
  teal: 'bg-teal-50   dark:bg-teal-900/30   text-teal-700   dark:text-teal-300',
  sky: 'bg-sky-50    dark:bg-sky-900/30    text-sky-700    dark:text-sky-300',
  violet: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
  rose: 'bg-rose-50   dark:bg-rose-900/30   text-rose-700   dark:text-rose-300',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={icons.folder}>Projects</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ name, company, tag, tagColor, desc }) => (
            <div
              key={name}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-md transition-all shadow-sm"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{name}</h3>
                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${tagMap[tagColor]}`}>
                  {tag}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-3 italic">{company}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
