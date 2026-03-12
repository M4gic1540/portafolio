const experiences = [
  {
    company: 'Allware',
    role: 'Analista de Sistemas',
    period: 'Febrero 2023 – Febrero 2024',
    location: 'Santiago, Chile',
    current: true,
    items: [
      'Mantenimiento y desarrollo de sistemas internos.',
      'Análisis funcional de requerimientos empresariales.',
      'Implementación de soluciones web y automatización de procesos.',
      'Trabajo colaborativo bajo metodología SCRUM.',
    ],
  },
  {
    company: 'Entel',
    role: 'Analista QA',
    period: 'Febrero 2021 – Marzo 2023',
    location: 'Santiago, Chile',
    current: false,
    items: [
      'Ejecución y documentación de pruebas funcionales.',
      'Reporte, seguimiento y documentación de errores.',
      'Apoyo al equipo de desarrollo en mejora de calidad.',
      'Participación en sprints y reuniones SCRUM.',
    ],
  },
]

const education = {
  institution: 'Duoc UC',
  degree: 'Ingeniería en Informática',
  period: '2022 – Actualidad',
  location: 'Santiago, Chile',
}

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-100 mb-2">
          Experiencia Profesional
        </h2>
        <p className="text-center text-slate-400 mb-14">Mi trayectoria en el mundo TI</p>

        <div className="relative max-w-3xl mx-auto flex flex-col gap-6">
          {/* Vertical line */}
          <div className="absolute left-2.75 top-4 bottom-4 w-px bg-white/8" />

          {experiences.map((exp) => (
            <div key={exp.company} className="grid grid-cols-[24px_1fr] gap-6 items-start">
              <div className="flex justify-center pt-4.5">
                <span className={`w-3 h-3 rounded-full border-2 border-bg relative z-10 shrink-0 ${
                  exp.current
                    ? 'bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]'
                    : 'bg-white/20'
                }`} />
              </div>
              <div className="bg-surface border border-white/8 rounded-xl p-6 hover:border-indigo-500/40 hover:shadow-[0_4px_24px_rgba(99,102,241,0.08)] transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-100 mb-1">{exp.role}</h3>
                    <p className="text-indigo-400 font-semibold text-sm">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="text-xs text-white-500">{exp.location}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-white-400 text-sm leading-relaxed space-y-1">
                  {exp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="grid grid-cols-[24px_1fr] gap-6 items-start">
            <div className="flex justify-center pt-4.5">
              <span className="w-3 h-3 rounded-full border-2 border-bg bg-violet-500 relative z-10 shrink-0" />
            </div>
            <div className="bg-surface-alt border border-white/8 rounded-xl p-6 hover:border-violet-500/40 transition-all">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-1">{education.degree}</h3>
                  <p className="text-violet-400 font-semibold text-sm">{education.institution}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 whitespace-nowrap">
                    {education.period}
                  </span>
                  <span className="text-xs text-slate-500">{education.location}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience

