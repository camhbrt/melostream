import Navbar from "./components/Navbar";
import Test from "./components/Test";

function App() {

  return (
    <>
      <Navbar/>
      <div className="h-screen bg-gradient-to-bl from-teal-900 to-black px-2 text-teal-50">
        <Test/>
        
      </div>
    </>
  );
}

export default App
