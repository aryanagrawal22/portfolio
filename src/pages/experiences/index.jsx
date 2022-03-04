import Experiences from "../../components/Experiences/index";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";

export default function ExperiencePage(props) {
  return (
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Experiences data={props.data}/>
        <Footer/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from API
  const res = await fetch(`${process.env.API}/experience`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

