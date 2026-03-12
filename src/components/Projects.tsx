interface Project {
  title: string
  description: string
  tags: string[]
  status: string
  repo?: string
  repob?: string
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión Interna',
    description:
      'Desarrollo y mantenimiento de sistema interno para gestión de procesos empresariales. Implementación de módulos de automatización y reportería.',
    tags: ['Python', 'Django', 'MySQL', 'JavaScript'],
    status: 'Empresa',
  },
  {
    title: 'Automatización de Pruebas QA',
    description:
      'Suite de pruebas funcionales automatizadas para plataforma de telecomunicaciones. Reducción significativa del tiempo de ciclo de testing.',
    tags: ['QA', 'SCRUM', 'Documentación'],
    status: 'Empresa',
  },
  {
    title: 'Portfolio Personal',
    description:
      'Este mismo portfolio, construido con React, TypeScript y Vite. Diseño responsive con tema oscuro y Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    status: 'Personal',
    repo: 'https://github.com/tomas-gonzalez-borje',
  },
    {
    title: 'E-commerce',
    description:
      'Tienda online para venta de productos diversos y gestión de inventario. con funcionalidades de carrito, checkout y panel de administración.',
    tags: ['React', 'NestJS', 'PostgreSQL'],
    status: 'Personal',
    repo: 'https://github.com/M4gic1540/E-commerce-Frontend',
    repob: 'https://github.com/M4gic1540/E-commerce-Backend'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-100 mb-2">
          Proyectos
        </h2>
        <p className="text-center text-slate-400 mb-14">
          Algunos de los trabajos en los que he participado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-white/8 rounded-xl p-6 flex flex-col gap-3 hover:border-indigo-500/40 hover:shadow-[0_4px_24px_rgba(99,102,241,0.08)] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between">
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10l4-4 4 4M12 6v8" />
                  <path d="M8 18h8" />
                </svg>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  project.status === 'Personal'
                    ? 'bg-emerald-500/15 text-emerald-300'
                    : 'bg-indigo-500/15 text-indigo-300'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-0.5 rounded-md bg-surface-alt text-slate-400 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.repo || project.repob) && (
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 text-sm font-semibold hover:opacity-70 transition-opacity"
                    >
                      {project.repob ? 'Frontend →' : 'Ver repositorio →'}
                    </a>
                  )}
                  {project.repob && (
                    <a
                      href={project.repob}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 text-sm font-semibold hover:opacity-70 transition-opacity"
                    >
                      Backend →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm">
          ¿Tienes un proyecto en mente?{' '}
          <a href="#contact" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
            Hablemos →
          </a>
        </p>
      </div>
    </section>
  )
}

export default Projects

