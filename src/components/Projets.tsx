import { CardsProjets } from "./CardsProjets"
import { ModalProjet, type Projet } from "./Modal"
import { useState } from "react"

export const Projets = () => {
  const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(null)

  return (
    <section id="projets" className="scroll-reveal bg-slate-900 py-20">
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
          resume="Une application pour gérer les animaux, les enclos et les employés d’un zoo."
          description="Application de gestion d’un zoo

Développement d’une application permettant de gérer les différentes ressources d’un zoo à travers un système de gestion des employés, des animaux et des enclos.

Fonctionnalités principales :

Gestion des enclos : ajout et suppression d’enclos.
Gestion des animaux : ajout, suppression et modification des informations, notamment leur changement d’enclos.
Gestion des employés : ajout et suppression des salariés.
Attribution des employés aux différents enclos.
Gestion des droits selon le rôle de l’utilisateur :
Salarié : gestion des animaux et des enclos.
Directeur : gestion des employés et attribution des enclos.

Le projet met en œuvre un système de gestion des données et des permissions utilisateurs adapté aux différents rôles."
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
          onDetails={setProjetSelectionne}
        />

      
        <CardsProjets
          badge="Ecole"
          Titre="Projet Yummi"
          resume="Une application collaborative pour créer, partager et noter des recettes."
          description="Développement en équipe de deux d’une application permettant aux utilisateurs de créer, partager et évaluer des recettes, avec un système de gestion et de modération administré par un compte administrateur.

Fonctionnalités principales :

Gestion de plusieurs types de comptes : administrateur et utilisateurs.
Création et publication de recettes par les utilisateurs.
Système de commentaires et de notation des recettes.
Modération des commentaires par l’administrateur :
Validation ou refus d’un commentaire.
Suppression d’un commentaire.
Modération des recettes par l’administrateur :
Validation ou refus d’une recette avant publication.
Suppression d’une recette.
Gestion des droits et permissions selon le rôle de l’utilisateur.

Le projet a été réalisé en binôme, avec une répartition des tâches et une collaboration sur le développement de l’application.

Le projet met en œuvre un système de gestion des utilisateurs, de modération des contenus, de droits d’accès et de relations entre les différentes données."
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
          onDetails={setProjetSelectionne}
        />

        <CardsProjets
          badge="Ecole"
          Titre="Centres de Vacance"
          resume="Une application pour organiser les activités et les inscriptions d’un centre de vacances."
          description="Développement d’une application permettant de gérer les activités proposées dans un centre de vacances, avec une gestion différenciée des vacanciers et des animateurs.

Fonctionnalités principales :

Gestion de plusieurs types d’utilisateurs : vacanciers et animateurs.
Inscription des vacanciers aux activités disponibles, sous réserve de places restantes.
Vérification de la disponibilité et de la capacité de chaque activité.
Désinscription d’un vacancier, uniquement si l’activité n’a pas encore commencé.
Gestion des activités par les animateurs :
Création et suppression d’activités.
Inscription d’un vacancier à une activité.
Désinscription d’un vacancier d’une activité.
Gestion des droits et permissions selon le rôle de l’utilisateur.
Mise en place de règles métier permettant de contrôler les inscriptions selon la capacité et l’état de l’activité.

Le projet met en œuvre un système de gestion des utilisateurs, des activités et des inscriptions, avec une logique de contrôle des disponibilités et des droits d’accès."
          tags={["HTML", "CSS", "PHP", "SQL" , "MYSQL" , "javascript"]}
          onDetails={setProjetSelectionne}
        />

        <CardsProjets
          badge="Perso"
          Titre="Application Méteo"
          resume="Une application React pour consulter la météo d’une ville."
          description="Une application météo permettant de consulter les prévisions en temps réel par ville, développée avec React pour apprendre la gestion d'état, les appels à une API externe et l'affichage dynamique des données."
          tags={["React", "Tailwind CSS", "OpenWeather API", "TypeScript"]}
          onDetails={setProjetSelectionne}
        />

         <CardsProjets
          badge="Perso"
          Titre="CRUD Node JS"
          resume="Une application de connexion créée pour apprendre le CRUD avec Node.js."
          description="Développement d’une application web intégrant un système d’authentification et un formulaire de gestion de données, réalisée avec Node.js afin de mettre en pratique les opérations CRUD.

Fonctionnalités principales :

Création et gestion de comptes utilisateurs.
Système de connexion et d’authentification.
Formulaire permettant d’ajouter et de gérer des données.
Mise en œuvre des opérations CRUD :
Création de données.
Consultation des données.
Modification des données.
Suppression des données.
Gestion des requêtes et des données côté serveur avec Node.js.

Le projet a permis d’approfondir la maîtrise du développement back-end avec Node.js, de la gestion des formulaires et des opérations CRUD."
          tags={["Node JS", "Express JS", "Tailwind CSS"]}
          onDetails={setProjetSelectionne}
        />



        <CardsProjets
          badge="Perso"
          Titre="Candi-Tracker"
          resume="Candi-Tracker est une application personnelle de suivi des candidatures. Elle permet d’enregistrer les offres trouvées sur différents sites, de conserver leurs informations dans une base locale, puis de suivre leur état jusqu’à une éventuelle relance ou réponse."


          description="Le projet est composé de deux parties principales :

1. L’application web
Accessible avec http://localhost:4173, elle permet de :

consulter toutes les candidatures ;
ajouter ou modifier une candidature ;
enregistrer l’entreprise, le poste et le profil recherché ;
préciser le type de contrat, le lieu et le moyen utilisé ;
ajouter des notes personnelles ;
modifier le statut : envoyée, relancée, entretien, refusée, acceptée, etc. ;
rechercher une candidature ;
filtrer par statut, moyen, contrat et période ;
trier par date ou par entreprise ;
afficher une pastille À relancer après 5 jours sans réponse ;
exporter les candidatures au format PDF.
2. L’extension de navigateur
L’extension fonctionne avec Chrome ou Edge. Elle ajoute un bouton sur certains sites d’emploi comme :

Indeed ;
HelloWork ;
LinkedIn ;
Apec ;
France Travail ;
Welcome to the Jungle.
Elle peut aussi être utilisée sur d’autres sites grâce au clic droit :

Clic droit → Sauvegarder cette offre

L’extension récupère automatiquement certaines informations de la page :

nom de l’entreprise ;
intitulé du poste ;
lieu ;
type de contrat ;
site d’origine ;
lien de l’offre.
Les informations peuvent ensuite être corrigées avant l’enregistrement. Le formulaire conserve également un brouillon local si l’utilisateur quitte la page avant de terminer.

"
          tags={["HTML", "CSS", "JavaScript", "Node.js" , "Express" , "better-sqlite3","PDFKit","CORS","JSON","SQL / SQLite"]}
          onDetails={setProjetSelectionne}
        />

        




      </div>

      <ModalProjet
        projet={projetSelectionne}
        onClose={() => setProjetSelectionne(null)}
      />
    </section>
  )
}
