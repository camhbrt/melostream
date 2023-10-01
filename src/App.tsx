import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="font-urbanist">
      <Navbar/>
      <div className="pl-64 pt-6 bg-gradient-to-tl from-sky-700 to-slate-950 px-2 text-teal-50 bg-fixed min-h-screen">
        <Home/>
        
      </div>
    </div>
  );
}

export default App
