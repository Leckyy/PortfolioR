export const APropos = () => {
  return (
    <section id="a-propos" className="bg-slate-900 px-6 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
        <div>
          {/* <p className="mb-3 font-mono text-sm text-mint">Mon parcours</p> */}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">À propos de moi</h2>
          <div className="space-y-4 text-base leading-7 text-slate-300">
            <p>
              Je m'appelle Tristan auriat , titulaire d&apos;un BTS Solutions Logicielles et
              Applications Métier, et je vais commencer un Bachelor Data &amp; IA.
              Je m&apos;intéresse au développement web et à la conception d&apos;applications
              utiles, de la gestion des données à l&apos;interface utilisateur.
            </p>
            <p>
              À travers mes projets scolaires et personnels, je développe mes
              compétences en front-end, back-end et gestion de bases de données.
              J&apos;aime comprendre le fonctionnement d&apos;une application dans son
              ensemble et progresser en construisant des solutions concrètes.
            </p>
            <p>
              Curieux et motivé, je souhaite continuer à apprendre au contact d&apos;une
              équipe et mettre mes compétences en pratique sur des projets concrets.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="border-l-2 border-coral bg-midnight px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">Formation</p>
            <p className="mt-2 font-semibold text-white">Bachelor Data &amp; IA</p>
          </div>
          <div className="border-l-2 border-mint bg-midnight px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">Objectif</p>
            <p className="mt-2 font-semibold text-white">Data Analyst</p>
          </div>
          <div className="border-l-2 border-mint bg-midnight px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">Alternance recherchée</p>
            <p className="mt-2 font-semibold text-white">Data / IA ou développement web</p>
          </div>
          <div className="border-l-2 border-coral bg-midnight px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">Rythme</p>
            <p className="mt-2 font-semibold text-white">3 semaines en entreprise / 1 semaine à l&apos;école</p>
          </div>
        </div>
      </div>
    </section>
  )
}