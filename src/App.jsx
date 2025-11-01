import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-linear-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div>
          <Navbar />
          <Hero />
        </div>
      </main>
    </>
  );
}

export default App;
