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
            Information Technology. I&apos;m currently working in the fields of Web
            Development and Cloud.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            I am Innovative, task-driven, and enthusiastic with knowledge of
            Web-Development and creating highly scalable and distributed
            systems. Skilled at writing well-designed, testable and efficient
            code using current best practices.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            In my spare time I like to hit the Gym, Dance my way through, and
            play video-games. I’m always down for hearing about new projects, so
            feel free to drop me a line.
          </p>
          <Link href="/contact">
            <a className="inline-flex flex-wrap">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="icon button__icon button__icon--start fill-[#00e5ff] mx-3 mt-12 mt-2 font-secondary font-normal text-[#00e5ff] text-xl text-center"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"></path>
              </svg>
              <span className="mx-auto mt-12 mt-2 font-secondary font-normal text-[#00e5ff] text-xl text-center">
                Send A Message
              </span>
            </a>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
