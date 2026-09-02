import { CardsProjets } from "./CardsProjets"

export const Projets = () => {
  return (
    <section id="projets" className="bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-white mb-4">Mes projets</h2>
        <div className="w-16 h-0.5 bg-neutral-700 mx-auto mb-5" />
        <p className="text-neutral-400 max-w-xl mx-auto">
         Une sélection de mes Projets  que j'ai pu réalisé en cours ou en perso
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <CardsProjets
          badge="Ecole"
          Titre="Projet Zoo"
          description="Un projet qui permet de gerer la gestion d'un zoo (animaux, zoo et employé)"
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
        />

      
        <CardsProjets
          badge="Ecole"
          Titre="Projet Yummi"
          description="Le projet permet d'avoir plusieur compte un admin / et les utilisateur . Les utilisateur peuvent poster une recette. commenter une recette et un systeme de notes et l'admin peut accepter ou non le commentaire , peut le supprimer et il peut accepter ou non une recette et peut la supprimer une recette "
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
        />

        <CardsProjets
          badge="Ecole"
          Titre="Centre de Vacance"
          description="Il y a plusieur utilisateur, les vacanciers et les animateurs . les vacanciers peuvent s'inscrire a une activite si il y a encore de la place et qu'elle est toujours disponible , peut aussi se desinscrire si l'activite a pas encore commencer et les animateurs peuvent ajouter une activite , supprimer une activiter  , peut aussi inscrire un vacancier dessus et le descincre "
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
        />

        <CardsProjets
          badge="Perso"
          Titre="Application Méteo"
          description="Une application météo permettant de consulter les prévisions en temps réel par ville, développée avec React pour apprendre la gestion d'état, les appels à une API externe et l'affichage dynamique des données."
          tags={["React", "Tailwind CSS", "OpenWeather API", "TypeScript"]}
        />

         <CardsProjets
          badge="Perso"
          Titre="CRUD Node JS"
          description="une application de connexion a un formulaire pour apprendre le CRUD de node JS"
          tags={["Node JS", "Express JS", "Tailwind CSS"]}
        />

        




      </div>
    </section>
  )
}
