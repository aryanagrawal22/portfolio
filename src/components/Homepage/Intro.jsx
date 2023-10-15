import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 mt-6">
      <Fade className="my-auto">
        <div className="my-auto px-5 flex flex-col justify-start md:justify-center lg:justify-start">
          <h1 className=" mt-6 font-primary text-white text-2xl text-left tracking-[.30em]">
            ARYAN AGRAWAL
          </h1>
          <div className="mt-6 font-primary font-medium text-[#00e5ff] text-500 text-5xl text-left">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Cloud + Devops")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <h1 className="mt-6 font-secondary font-normal text-gray-400 text-xl text-left">
            I’m a Software Engineer specilalizing in building exceptional
            websites, system applications and everything in between.
          </h1>
          <h1 className="mt-7 font-secondary font-bold text-gray-400 text-lg text-left">
            Worked At:
          </h1>
          <div className="mt-4 inline-grid grid-cols-2">
          <Link href="https://www.getfleek.app/">
              <a target="_blank">
                <img
                  src="images/Barclays.png"
                  className="max-h-18 sm:max-h-18 md:max-h-20 xl:max-h-18 transition duration-300 ease-in-out transform hover:scale-110 mt-1"
                  alt="Logo"
                />
              </a>
            </Link>
            <Link href="https://www.bipolarfactory.com/">
              <a target="_blank">
                <img
                  src="images/MPL.png"
                  className="max-h-18 sm:max-h-18 md:max-h-20 xl:max-h-18 transition duration-300 ease-in-out transform hover:scale-110 mt-1"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="px-5 flex flex-col items-center lg:h-[32rem]">
          <img
            src="images/blackgif.gif"
            className="overflow-hidden rounded-full mt-8 lg:mt-0"
            alt="Aryan Agrawal"
          />
        </div>
      </Fade>
    </div>
  );
}
