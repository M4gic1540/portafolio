const contactLinks = [
  {
    label: 'Email',
    value: 't.gonzalezb24@gmail.com',
    href: 'mailto:t.gonzalezb24@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tomas-gonzalez-borje',
    href: 'https://www.linkedin.com/in/tomas-gonzalez-borje-907b8a286/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Teléfono',
    value: '+56 9 2851 0182',
    href: 'tel:+56928510182',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
      </svg>
    ),
  },
    {
    label: 'Github',
    value: 'M4gic1540',
    href: 'https://github.com/M4gic1540',
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
      </svg>
    ),
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-100 mb-2">
          Contacto
        </h2>
        <p className="text-center text-slate-400 mb-14">
          ¿Tienes alguna propuesta o pregunta? No dudes en escribirme.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-bg border border-white/8 rounded-xl px-5 py-4 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-500/12 rounded-lg shrink-0 text-indigo-400 [&_svg]:w-5 [&_svg]:h-5">
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-0.5">{link.label}</p>
                <p className="text-sm font-medium text-slate-200 truncate">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Santiago, Chile
        </div>
      </div>


    </section>
  )
}

export default Contact

