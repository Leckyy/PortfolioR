 import { Navbar } from "../components/Navbar"
  import { Compétence } from "../components/Compétence"
  import { Projets} from "../components/Projets"

function App() {
  return (
   <div>
     <Navbar/>
   
  <div className="flex flex-col md:flex-row h-screen w-full items-center overflow-hidden">
  
  
  <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-16 bg-slate-900 h-full transform transition-all duration-1000 ease-out animate-fade-in-left">
    <h1 className="text-5xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
      AURIAT Tristan
    </h1>
    
    <p className="mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
      Je suis titulaire d'un BTS Solutions Logicielles et Applications Métier. 
      Je recherche actuellement une alternance dans la <span className="text-blue-400 font-semibold">Data / IA</span> (rythme 3 semaines en entreprise / 1 semaine à l'école).
    </p>

  </div>

  
  <div className="flex-1 flex justify-center items-center p-8 bg-slate-900 h-full">
    <div className="">
      <img 
        src="img/photo.png" 
        alt="Photo de Tristan Auriat" 
        className="max-h-[70vh] relative group transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
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