import "./App.css";
import About from "./Components/About";
import CompanyLogo from "./Components/CompanyLogo";
import Footer from "./Components/Footer";
import FutureSection from "./Components/FutureSection";
import Hero from "./Components/Hero";
import Monitor from "./Components/Monitor";
import Navbar from "./Components/Navbar";
import PurposeSection from "./Components/PurposeSection";
import ScheduleSection from "./Components/ScheduleSection";

function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-linear-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div>
          <Navbar />
          <Hero />
          <CompanyLogo/>
          <PurposeSection/>
          <About/>
          <ScheduleSection/>
          <Monitor/>
          <FutureSection/>
          <Footer/>
        </div>
      </main>
    </>
  );
}

export default App;
