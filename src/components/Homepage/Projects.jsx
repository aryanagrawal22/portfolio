import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function Projects() {
  return (
    <Fade>
      <div className="container my-14 mx-auto px-4 md:px-12">
        <h1 className=" mt-8 mb-4 font-primary text-white text-xl text-center">
          TAKE A LOOK AT MY
        </h1>
        <h1 className=" mb-8 font-primary font-bold text-white text-3xl text-center text-[#00e5ff]">
          Projects
        </h1>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />

              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className=" font-primary font-semibold text-white text-2xl text-center text-black ">
                  Online Judge
                </h1>
              </header>

              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="ml-2 text-sm">
                    Highly scalable and secure Online Judge Platform for Coding Competition event conducted in Xenia '22 of PCSB - CSI.
                </p>
              </div>
              <div className="flex flex-col border border-t-0 border-r-0 border-l-0 border-gray-700 mx-6"></div>


              <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                <Link href="/">
                  <a target="_blank">
                    <img
                      src="images/github.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
                <Link href="https://google.com">
                  <a target="_blank">
                    <img
                      src="images/www.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}

          
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />

              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className=" font-primary font-semibold text-white text-2xl text-center text-black ">
                  Online Judge
                </h1>
              </header>

              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="ml-2 text-sm">
                    Highly scalable and secure Online Judge Platform for Coding Competition event conducted in Xenia '22 of PCSB - CSI.
                </p>
              </div>
              <div className="flex flex-col border border-t-0 border-r-0 border-l-0 border-gray-700 mx-6"></div>


              <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                <Link href="/">
                  <a target="_blank">
                    <img
                      src="images/github.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
                <Link href="https://google.com">
                  <a target="_blank">
                    <img
                      src="images/www.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />

              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className=" font-primary font-semibold text-white text-2xl text-center text-black ">
                  Disease Predictor
                </h1>
              </header>

              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="ml-2 text-sm">
                Responsive website to predict disease from given health parameters using machine learning models.
                </p>
              </div>
              <div className="flex flex-col border border-t-0 border-r-0 border-l-0 border-gray-700 mx-6"></div>


              <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                <Link href="/">
                  <a target="_blank">
                    <img
                      src="images/github.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
                <Link href="https://google.com">
                  <a target="_blank">
                    <img
                      src="images/www.svg"
                      alt=""
                      className="fill-white mx-5"
                    />
                  </a>
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}


        </div>
      </div>
    </Fade>
  );
}
