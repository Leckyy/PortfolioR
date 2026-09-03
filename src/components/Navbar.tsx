
import type { CSSProperties, MouseEvent } from "react"
import { useState } from "react"

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Mes projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    closeMenu()

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    window.history.pushState(null, "", href)
  }

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-20">
      <nav className="flex w-full items-center justify-between px-6 py-4" aria-label="Navigation principale">
        <a className="nav-logo" href="#accueil" onClick={(event) => handleNavigation(event, "#accueil")}>
          Portfolio
        </a>

        <button
          type="button"
          className="nav-menu-button md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={menuOpen ? "nav-bar rotate-45 translate-y-1" : "nav-bar"} />
          <span className={menuOpen ? "nav-bar -rotate-45 -translate-y-1" : "nav-bar"} />
        </button>

        <div id="main-navigation" className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ "--link-index": index } as CSSProperties}
              onClick={(event) => handleNavigation(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
