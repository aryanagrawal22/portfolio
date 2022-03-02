import Intro from "../components/Homepage/Intro"
import Projects from "../components/Homepage/Projects";
import Skills from "../components/Homepage/Skills";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/Navbar";

export default function Home() {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Intro/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    </div>
    
  );
}
