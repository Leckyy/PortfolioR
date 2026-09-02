import type React from "react"

type DESCardsprojets = {
  badge: string
  Titre: string
  description: string
  tags: string[]
  href?: string
}

export const CardsProjets: React.FC<DESCardsprojets> = ({
  badge,
  Titre,
  description,
  tags,
  href = "#",
}) => {
  return (
    <a
      href={href}
      className="flex flex-col bg-Atlantic2 border border-neutral-800 rounded-xl p-6 w-full max-w-sm hover:border-neutral-700 transition-colors"
    >
      {/* Badge */}
      <div className="flex justify-end mb-6">
        <span className="text-xs font-medium bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-semibold  text-center mb-3">{Titre}</h3>
      <p className="text-sm  text-center leading-relaxed mb-5">{description}</p>

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
      
      {/* <div className="flex items-center justify-center">
        <span className="text-sm font-medium ">View Details</span>
      </div> */}
    </a>
  )
}
