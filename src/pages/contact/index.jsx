import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function ContactPage() {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
