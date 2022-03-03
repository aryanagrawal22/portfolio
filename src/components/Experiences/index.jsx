import Experience from "./Experience";
import {Fade} from "react-awesome-reveal";
import Organizations from "./Organizations";
import React from "react";

export default function Experiences() {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-white hover:text-[#00e5ff] transition duration-500 ease-in-out transform hover:scale-105">
            Experiences
          </h1>
        </div>
      </Fade>

      <Experience />

      <Fade up>
        <div>
          <h1 className="text-center mt-16 font-primary font-black text-3xl md:text-5xl capitalize text-white hover:text-[#00e5ff] transition duration-500 ease-in-out transform hover:scale-105">
          Organizations
          </h1>
        </div>
      </Fade>
      <Organizations />
    </div>
  );
}