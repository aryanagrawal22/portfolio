import Experiences from "../../components/Experiences/index";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function Home() {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Experiences/>
        <Footer/>
      </div>
    </div>
  );
}
