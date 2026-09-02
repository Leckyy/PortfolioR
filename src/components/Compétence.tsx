import { Cards } from "./Cards"

// Ajuste les paliers ("solide", "aise" ou "notions") selon ton propre ressenti.
const langages = [
  { titre: "HTML", tier: "solide" as const },
  { titre: "CSS", tier: "aise" as const },
  { titre: "JavaScript", tier: "aise" as const },
  { titre: "PHP", tier: "solide" as const },
  { titre: "SQL", tier: "solide" as const },
  { titre: "Python", tier: "notions" as const },
]

const frameworks = [
  { titre: "React", tier: "aise" as const },
  { titre: "Tailwind CSS", tier: "aise" as const },
  { titre: "Node.js", tier: "aise" as const },
]

const outils = [
  { titre: "Git", tier: "notion" as const },
  { titre: "MySQL", tier: "aise" as const },
  { titre: "VS Code", tier: "solide" as const },
]

const systemes = [{ titre: "Windows", tier: "solide" as const }]

type Skill = { titre: string; tier: "solide" | "aise" | "notions" }

const SkillGroup = ({ label, skills }: { label: string; skills: Skill[] }) => {
  const solide = skills.filter((s) => s.tier === "solide")
  const aise = skills.filter((s) => s.tier === "aise")
  const notions = skills.filter((s) => s.tier === "notions")

  const tiers = [
    { label: "Solide", items: solide },
    { label: "À l'aise", items: aise },
    { label: "Notions", items: notions },
  ]

  return (
    <div id="competence" >
      <h3 className="font-mono text-sm text-teal-400 mb-3">{label}</h3>
      <div className="flex flex-col gap-3">
        {tiers.map(
          (t) =>
            t.items.length > 0 && (
              <div key={t.label}>
                <p className="text-xs text-zinc-500 mb-1.5">{t.label}</p>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((s) => (
                    <Cards key={s.titre} {...s} />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export const Compétence = () => {
  return (
    <section
      id="competences"
      className="px-6 sm:px-12 py-24 bg-slate-900 border-t border-zinc-900"
    >
      <h2 className="text-3xl font-bold text-white mb-15 text-center ">
        Compétences techniques
      </h2>

      <div className="grid gap-10 sm:grid-cols-4">
        <SkillGroup label="Langages" skills={langages} />
        <SkillGroup label="Frameworks" skills={frameworks} />
        <SkillGroup label="Outils" skills={outils} />
        <SkillGroup label="Systèmes" skills={systemes} />
      </div>
    </section>
  )
}
