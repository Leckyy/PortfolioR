import type React from "react"

type CardsProps = {
  titre: string
  tier: "solide" | "aise" | "notions"
}

const styles = {
  solide: "bg-teal-400/15 text-teal-300",
  aise: "bg-teal-400/10 text-teal-400",
  notions: "bg-teal-400/10 text-teal-400",
}

export const Cards: React.FC<CardsProps> = ({ titre, tier }) => {
  return (
    <span className={`text-sm px-4 py-1 rounded-sm ${styles[tier]} `}>
      {titre}
    </span>
  )
}
