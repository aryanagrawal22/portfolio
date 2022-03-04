import { useEffect, useState } from "react";
import Experiences from "../../components/Experiences/index";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";
import Loader from "../../components/Shared/Loader";

export default function ExperiencePage(props) {

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
        <NavBar/>
        <Experiences data={props.data}/>
        <Footer/>
      </div>
    </div>
    )}
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from API
  const res = await fetch(`${process.env.API}/experience`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

