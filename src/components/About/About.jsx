import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-[68vh] mx-6">
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#00e5ff]">
            About Me
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-center">
            I&apos;m Aryan, currently I live in Mumbai and pursuing my Undergraduate
            Degree from Pune Institute of Computer Technology, Pune in
            Information Technology. I&apos;m currently working in the fields of Backend
            Development and Cloud.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            I am Innovative, task-driven, and enthusiastic with knowledge of
            complex softwares, creating highly scalable and distributed
            systems. Skilled at writing well-designed, testable and efficient
            code using current best practices.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            In my spare time I like to hit the Gym, Dance my way through, and
            learn new skills. I’m always down for hearing about new projects, so
            feel free to drop me a line.
          </p>
        </div>
      </Fade>
    </div>
  );
}
