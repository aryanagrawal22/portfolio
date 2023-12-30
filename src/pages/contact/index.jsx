import { useEffect, useState } from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";
import Loader from "../../components/Shared/Loader";

export default function ContactPage() {
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
            <NavBar />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
