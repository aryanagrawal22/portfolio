import Intro from "../../components/Homepage/Intro";
import NavBar from "../../components/Shared/Navbar";

export default function Home() {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Intro/>
      </div>
    </div>
  );
}
