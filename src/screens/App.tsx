 import { useEffect } from "react"
 import { Navbar } from "../components/Navbar"
 import { APropos } from "../components/APropos"
 import { Compétence } from "../components/Compétence"
 import { Projets } from "../components/Projets"
 import { Contact } from "../components/Contact"

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".scroll-reveal")

    if (!revealElements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar />

      <div
        id="accueil"
        className="relative flex min-h-0 w-full flex-col items-center overflow-hidden bg-midnight pt-14 md:h-[calc(100vh-3.5rem)] md:flex-row md:items-stretch"
      >
        <div className="hero-copy flex h-full flex-1 flex-col items-start justify-center bg-midnight p-8 md:w-1/2 md:flex-none md:p-16">
          <h1 className="cursor-default text-5xl font-bold tracking-tight text-white transition-transform duration-300 hover:scale-105">
            <span className="text-coral">AURIAT</span> Tristan
          </h1>

          <p className="hero-description mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
            Je suis titulaire d'un BTS Solutions Logicielles et Applications Métier. Je
            recherche actuellement une alternance dans la <span className="font-semibold text-mint">Data / IA</span> (rythme 3
            semaines en entreprise / 1 semaine à l'école).
          </p>
        </div>

        <div className="hero-visual flex h-full flex-1 items-center justify-center bg-midnight px-8 pt-8 md:w-1/2 md:flex-none md:items-end md:px-8 md:pb-0 md:pt-8">
          <div className="hero-photo-wrap md:absolute md:right-0 md:bottom-0">
            <img
              src="img/photo.png"
              alt="Photo de Tristan Auriat"
              className="hero-photo relative block h-auto w-auto md:w-[min(70vw,760px)] md:max-w-none"
            />

            <div className="pointer-events-none absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>

      <APropos />
      <Compétence />
      <Projets />
      <Contact />
    </div>
  )
}

export default App