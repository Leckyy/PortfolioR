 import { Navbar } from "../components/Navbar"
  import { Compétence } from "../components/Compétence"
  import { Projets} from "../components/Projets"

function App() {
  return (
   <div>
     <Navbar/>
   
  <div id="accueil" className="relative flex flex-col md:flex-row min-h-screen w-full items-center overflow-hidden bg-midnight pt-14 md:h-[calc(100vh-3.5rem)] md:min-h-0 md:items-stretch">
  
  
  <div className="hero-copy flex-1 flex flex-col justify-center items-start p-8 md:w-1/2 md:flex-none md:p-16 bg-midnight h-full">
    <h1 className="text-5xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
      <span className="text-coral">AURIAT</span> Tristan
    </h1>
    
    <p className="hero-description mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
      Je suis titulaire d'un BTS Solutions Logicielles et Applications Métier.
      Je recherche actuellement une alternance dans la <span className="text-mint font-semibold">Data / IA</span> (rythme 3 semaines en entreprise / 1 semaine à l'école).
    </p>

  </div>

  
  <div className="hero-visual flex-1 flex justify-center items-center px-8 pt-8 bg-midnight h-full md:w-1/2 md:flex-none md:items-end md:px-8 md:pt-8 md:pb-0">
    <div className="hero-photo-wrap md:absolute md:right-0 md:bottom-0">
      <img 
        src="img/photo.png" 
        alt="Photo de Tristan Auriat" 
        className="hero-photo block h-auto w-auto relative md:w-[min(65vw,700px)] md:max-w-none"
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