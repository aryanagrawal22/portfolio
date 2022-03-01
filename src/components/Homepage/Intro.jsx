import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 ">
      <Fade className="my-auto">
        <div className="my-auto px-5 flex flex-col justify-start md:justify-center lg:justify-start">
          <h1 className=" mt-2 font-primary text-white text-2xl text-left tracking-[.30em]">
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
                  .typeString("Devops + Cloud")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Machine Learning")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="px-5 flex flex-col items-center h-[32rem]">
          <img
            src="images/developer.png"
            className="overflow-hidden rounded-full mt-8 lg:mt-0"
            alt="Aryan Agrawal"
          />
        </div>
      </Fade>
    </div>
  );
}