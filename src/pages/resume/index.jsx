import Resume from "../../components/Resume/Resume";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function ResumePage() {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Resume/>
        <Footer/>
      </div>
    </div>
  );
}
