import Intro from "../components/Homepage/Intro"
import Projects from "../components/Homepage/Projects";
import Skills from "../components/Homepage/Skills";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/Navbar";

export default function Home(props) {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Intro/>
        <Projects data={props.data}/>
        <Skills/>
        <Footer/>
      </div>
    </div>
    
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API}/home`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
