import type React from "react"
import type { Projet } from "./Modal"

type DESCardsprojets = {
  badge: string
  Titre: string
  resume: string
  description: string
  tags: string[]
  href?: string
  onDetails: (projet: Projet) => void
}

export const CardsProjets: React.FC<DESCardsprojets> = ({
  badge,
  Titre,
  resume,
  description,
  tags,
  onDetails,
}) => {
  return (
    
    <div 
    className="project-card flex flex-col border rounded-xl p-6 w-full max-w-sm"
    >
      {/* Badge */}
      <div className="flex justify-end mb-6">
        <span className="text-xs font-medium bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-semibold  text-center mb-3">{Titre}</h3>
      <p className="text-sm  text-center leading-relaxed mb-5">{resume}</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mb-4" />

      {/* Footer: CTA */}

      <div className="flex items-center justify-center">
        <button className="project-button rounded-md px-4 py-2" onClick={() => onDetails({ badge, Titre, description, tags })}>
          <span className="text-sm font-medium">Voir les détails</span>
        </button>
      </div>
    </div>
  )
}
