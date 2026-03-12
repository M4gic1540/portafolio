const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-white/8">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 mb-8">

          {/* Brand */}
          <div className="flex-1 min-w-0">
            <span className="text-2xl font-extrabold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              TG
            </span>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed max-w-xs">
              Analista de Sistemas &amp; Desarrollador Web con base en Santiago, Chile.
            </p>
            <div className="flex gap-2 mt-4">
              <a
                href="https://linkedin.com/in/tomas-gonzalez-borje"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:t.gonzalezb24@gmail.com"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="Email"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:t.gonzalezb24@gmail.com"
                  className="text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  t.gonzalezb24@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+56928510182"
                  className="text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  +56 9 2851 0182
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-slate-500 text-sm">Santiago, Chile</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Tomás González Borje. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Hecho con React · TypeScript · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
