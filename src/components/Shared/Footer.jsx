import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full px-5 flex flex-col border-dashed border-t border-gray-700 mt-8 py-4 justify-center items-center md:justify-between md:flex-row">
      <div className="flex space-x-4 md:space-x-8 order-1 md:order-2">
        <Link href="https://github.com/aryanagrawal22">
          <a target="_blank" rel="noreferrer">
            <svg
              className="circled-icon fill-gray-400 transition duration-500 ease-in-out transform hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
            >
              <path d="M 33 29 C 31.203125 29 30 30.515625 30 33 C 30 35.484375 30.890625 38.046875 33 38 C 35.21875 37.949219 36.019531 35.777344 36 33 C 35.984375 30.515625 34.792969 29 33 29 Z M 44.261719 17.066406 C 44.535156 15.722656 44.652344 10.964844 42.679688 6 C 42.679688 6 38.148438 6.496094 31.296875 11.199219 C 29.863281 10.800781 27.429688 10.601563 25 10.601563 C 22.570313 10.601563 20.140625 10.800781 18.699219 11.195313 C 11.851563 6.496094 7.324219 6 7.324219 6 C 5.347656 10.964844 5.445313 15.609375 5.738281 17.066406 C 3.417969 19.585938 2 22.609375 2 26.742188 C 2 44.707031 16.90625 44.996094 20.667969 44.996094 C 21.519531 44.996094 23.210938 44.996094 25 45 C 26.789063 44.996094 28.484375 44.996094 29.332031 44.996094 C 33.09375 44.996094 48 44.707031 48 26.742188 C 48 22.609375 46.582031 19.585938 44.261719 17.066406 Z M 25.140625 43 L 25 43 C 15.570313 43 8.15625 41.660156 8.15625 32.496094 C 8.15625 30.300781 8.933594 28.265625 10.773438 26.574219 C 13.84375 23.753906 19.035156 25.246094 24.929688 25.246094 C 24.953125 25.246094 25.050781 25.246094 25.070313 25.246094 C 30.964844 25.246094 36.160156 23.757813 39.230469 26.574219 C 41.070313 28.265625 41.84375 30.300781 41.84375 32.496094 C 41.84375 41.660156 34.570313 43 25.140625 43 Z M 17 29 C 15.207031 29 14 31.015625 14 33.5 C 14 35.984375 15.207031 38 17 38 C 18.796875 38 20 35.984375 20 33.5 C 20 31.015625 18.796875 29 17 29 Z" />
            </svg>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/-aryanagrawal/">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="circled-icon fill-gray-400 transition duration-500 ease-in-out transform hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
            </svg>
          </a>
        </Link>

        <Link href="mailto:aryanagrawal20023@gmail.com">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="circled-icon fill-gray-400 transition duration-500 ease-in-out transform hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="30px"
              width="30px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </Link>
      </div>
      <div className="mt-4 order-2 md:order-1 md:my-auto md: mr-4">
        <p className="font-secondary font-semibold text-gray-400 text-md ">
          Made{" "}
          <span className="font-thin" role="img" aria-label="emoji">
            🔨
          </span>{" "}
          by Aryan Agrawal.
        </p>
      </div>
    </footer>
  );
}
