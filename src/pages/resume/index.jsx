import { useEffect, useState } from "react";
import Resume from "../../components/Resume/Resume";
import Footer from "../../components/Shared/Footer";
import NavBar from "../../components/Shared/Navbar";
import Loader from "../../components/Shared/Loader";

export default function ResumePage() {
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
  
  return (<>
    {
      isloading ? ( 
        <div className="loaderBody">
          <Loader/>
        </div>
      ):(
    <div className="App bg-black">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar/>
        <Resume/>
        <Footer/>
      </div>
    </div>
    )
  }
  </>
  );
}
