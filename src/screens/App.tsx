 import { Navbar } from "../components/Navbar"
  import { Compétence } from "../components/Compétence"
  import { Projets} from "../components/Projets"

function App() {
  return (
   <div>
     <Navbar/>
   
  <div id="accueil" className="flex flex-col md:flex-row min-h-screen w-full items-center overflow-hidden bg-midnight pt-14">
  
  
  <div className="hero-copy flex-1 flex flex-col justify-center items-start p-8 md:p-16 bg-midnight h-full">
    <h1 className="text-5xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
      <span className="text-coral">AURIAT</span> Tristan
    </h1>
    
    <p className="hero-description mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
      Je suis titulaire d'un BTS Solutions Logicielles et Applications Métier.
      Je recherche actuellement une alternance dans la <span className="text-mint font-semibold">Data / IA</span> (rythme 3 semaines en entreprise / 1 semaine à l'école).
    </p>

  </div>

  
  <div className="hero-visual flex-1 flex justify-center items-center p-8 bg-midnight h-full">
    <div className="hero-photo-wrap">
      <img 
        src="img/photo.png" 
        alt="Photo de Tristan Auriat" 
        className="hero-photo max-h-[70vh] relative"
      />
      
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </div>

</div>

    <Compétence/>
    

      <Projets/>

    

    


    </div>
  )
}

export default App