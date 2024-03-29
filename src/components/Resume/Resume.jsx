import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import React from "react";

export default function Resume() {

  const resumeUrl =
    "https://drive.google.com/file/d/1pIlRniAzWMPWoqZheLv1ZHN_jLtyxn0Q/preview";
  return (
    <div className="shadow-md max-w-5xl mx-auto mt-16 overflow-hidden rounded-lg divide-gray-800 px-3">
      <div className="h-full rounded-lg">
        <div className="bg-gray-900 py-6 px-6 flex justify-between items-center rounded-lg ">
          <Fade>
            <h1 className="text-gray-300 text-md md:text-lg sm:text-sm font-semibold font-secondary">
              Aryan Agrawal - Resume
            </h1>
          </Fade>

          <a
            href="https://drive.google.com/u/1/uc?id=1pIlRniAzWMPWoqZheLv1ZHN_jLtyxn0Q&export=download"
            download
          >
            <Fade>
              <div className="flex flex-row bg-[#00e5ff] hover:bg-[#66F0FF] duration-500 font-semibold text-black font-secondary py-2 px-4 rounded-md">
                <svg
                  className="fill-current text-black -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Download
              </div>
            </Fade>
          </a>
        </div>
        <iframe
          title="Aryan Agrawal | Resume"
          className="w-full h-screen mx-auto"
          src={resumeUrl}
        ></iframe>
      </div>
    </div>
  );
}