import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 py-5 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-extrabold tracking-tight bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
          TG
        </a>

        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-400 text-sm font-medium hover:text-slate-200 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-5.5 h-0.5 bg-slate-200 rounded transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5.5 h-0.5 bg-slate-200 rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5.5 h-0.5 bg-slate-200 rounded transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden list-none m-0 p-4 flex flex-col bg-bg/97 border-b border-white/8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-center text-slate-400 hover:text-slate-200 text-base transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar

