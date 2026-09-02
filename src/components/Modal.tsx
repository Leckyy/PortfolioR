import type React from "react"
import { useEffect } from "react"

export type Projet = {
  badge: string
  Titre: string
  description: string
  tags: string[]
}

type ModalProjetProps = {
  projet: Projet | null
  onClose: () => void
}

export const ModalProjet: React.FC<ModalProjetProps> = ({ projet, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!projet) return null

  return (
    <div
      className="modal-backdrop fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-panel bg-Atlantic2 border rounded-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="modal-close absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-xl"
          aria-label="Fermer les détails"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="mb-7 pr-10">
          <span className="modal-badge text-xs font-semibold uppercase tracking-widest">
            {projet.badge}
          </span>
          <h3 id="project-modal-title" className="mt-3 text-3xl font-bold text-white">
            {projet.Titre}
          </h3>
        </div>

        <p className="modal-description text-sm leading-7 whitespace-pre-line mb-7">
          {projet.description}
        </p>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-mint">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
          {projet.tags.map((tag) => (
            <span
              key={tag}
              className="modal-tag text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}