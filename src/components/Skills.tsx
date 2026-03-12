const skillGroups = [
  {
    category: 'Lenguajes & Frameworks',
    icon: '💻',
    skills: ['Python', 'Django', 'JavaScript', 'React', 'TypeScript', 'NestJS'],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    skills: ['MySQL', 'Oracle', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Control de Versiones',
    icon: '⚙️',
    skills: ['Git', 'Docker'],
  },
  {
    category: 'Metodologías',
    icon: '🔄',
    skills: ['SCRUM', 'Trabajo Ágil'],
  },
]

const certifications = [
  {
    name: 'IBM MQ Developer Essentials',
    issuer: 'IBM',
    year: '2023',
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-100 mb-2">
          Habilidades Técnicas
        </h2>
        <p className="text-center text-slate-400 mb-14">Tecnologías y herramientas que utilizo</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-bg border border-white/8 rounded-xl p-6 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className="text-sm font-bold text-slate-200 mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2 py-0.5 rounded-md bg-surface-alt text-slate-400 border border-white/8"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-5">
            Certificaciones
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 bg-bg border border-white/8 rounded-xl px-6 py-4"
              >
                <span className="text-3xl">🏆</span>
                <div>
                  <p className="font-bold text-sm text-slate-100">{cert.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

