import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function Contact() {

  return (
    <div className="min-h-[68vh] mx-6">
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#00e5ff]">
            Contact Me
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <Link href="mailto:aryanagrawal20023@gmail.com">
            <a className="inline-flex flex-wrap">
              <span className="mx-auto mt-12 mt-2 font-secondary font-normal text-[#00e5ff] text-xl text-center">
                aryanagrawal20023@gmail.com
              </span>
            </a>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
