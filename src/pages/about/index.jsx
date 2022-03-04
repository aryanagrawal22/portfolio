import { useEffect, useState } from "react";
import About from "../../components/About/About";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";
import Loader from "../../components/Shared/Loader";

export default function AboutPage() {

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
    <div className="App bg-black min-h-screen ;
    justify-content: flex-start;">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <About/>
        <Footer/>
      </div>
    </div>
    )}
    </>
  );
}
