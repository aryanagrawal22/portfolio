import { useEffect, useState } from "react";
import Intro from "../components/Homepage/Intro";
import Projects from "../components/Homepage/Projects";
import Skills from "../components/Homepage/Skills";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/Navbar";
import Loader from "../components/Shared/Loader";

export default function HomePage(props) {
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const itemStr = window.sessionStorage.getItem("key");

    if (!itemStr) {
      setIsLoading(true);
      window.sessionStorage.setItem("key", true);
      
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
    }
    if (itemStr) {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isloading ? (
        <div className="loaderBody">
          <Loader />
        </div>
      ) : (
        <div className="App bg-black">
          <div className="container mx-auto max-w-screen-xl">
            <NavBar />
            <Intro />
            <Projects data={props.data.projects} />
            <Skills data={props.data.skills} />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from API
  const res = await fetch(`${process.env.API}/home`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
