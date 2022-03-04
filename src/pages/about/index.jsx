import About from "../../components/About/About";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function AboutPage() {
  return (
    <div className="App bg-black min-h-screen ;
    justify-content: flex-start;">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}
