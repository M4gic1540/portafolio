import profileImg from '../assets/profile-redimencionado.jpg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(139,92,246,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">

          {/* Avatar — arriba en móvil, derecha en desktop */}
          <div className="flex relative w-36 h-36 md:w-52 md:h-52 shrink-0 items-center justify-center md:order-2">
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 border-2 border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <img
                src={profileImg}
                alt="Tomás González Borje"
                width={208}
                height={208}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 md:-inset-5 rounded-full border border-indigo-500/25 animate-spin-ring-slow" />
            <div className="absolute -inset-8 md:-inset-10 rounded-full border border-violet-500/15 animate-spin-ring-slower" />
          </div>

          {/* Content — debajo en móvil, izquierda en desktop */}
          <div className="md:order-1">
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-[3px] uppercase mb-3">
              Hola, soy
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
              Tomás González Borje
            </h1>
            <p className="text-lg text-slate-400 font-medium mb-5">
              Analista de Sistemas &amp; Desarrollador Web
            </p>
            <p className="text-slate-400 leading-relaxed max-w-lg mb-8">
              Profesional TI con experiencia en análisis de sistemas, aseguramiento de calidad
              y desarrollo web. Apasionado por la mejora continua, la automatización y el
              trabajo colaborativo.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-all"
              >
                Contactarme
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/10 text-slate-200 font-semibold text-sm hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-0.5 transition-all"
              >
                Ver proyectos
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <a href="mailto:t.gonzalezb24@gmail.com" className="flex items-center gap-2 text-slate-400 text-sm hover:text-indigo-400 transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                t.gonzalezb24@gmail.com
              </a>
              <a href="https://linkedin.com/in/tomas-gonzalez-borje" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 text-sm hover:text-indigo-400 transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                linkedin.com/in/tomas-gonzalez-borje
              </a>
              <a href="tel:+56928510182" className="flex items-center gap-2 text-slate-400 text-sm hover:text-indigo-400 transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
                </svg>
                +56 9 2851 0182
              </a>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}

export default Hero

