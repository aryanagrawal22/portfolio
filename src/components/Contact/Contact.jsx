import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    countryError: "",
    messageError: "",
  });

  const sendMessage = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API}/contact`, userData)
      .then((res) => {
        toast.success("Message sent successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  const validate = () => {
    let isValid = true;

    const { name, email, phone, country, message } = userData;
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let countryError = "";
    let messageError = "";

    if (name.trim() === "" || !name) {
      nameError = "* Required";
      isValid = false;
    } else if (name.length < 2) {
      nameError = "Name must be at least 2 characters";
      isValid = false;
    } else {
      nameError = "";
    }

    if (email.trim() === "" || !email) {
      emailError = "* Required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "Invalid Email";
      isValid = false;
    } else {
      emailError = "";
    }

    if (phone.trim() === "" || !phone) {
      phoneError = "* Required";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      phoneError = "Invalid Mobile Number";
      isValid = false;
    } else {
      phoneError = "";
    }

    if (country.trim() === "" || !country) {
      countryError = "* Required";
      isValid = false;
    } else {
      countryError = "";
    }

    if (message.trim() === "" || !message) {
      messageError = "* Required";
      isValid = false;
    } else if (message.length < 10) {
      messageError = "Message must be at least 10 characters";
      isValid = false;
    } else {
      messageError = "";
    }

    setError({
      nameError,
      emailError,
      phoneError,
      countryError,
      messageError,
    });

    return isValid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      sendMessage();
    }
  };

  return (
    <Fade className="w-full flex items-center justify-center my-12">
    <div
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center my-12"
    >
      
      <form className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-semibold leading-7 text-center text-black">
          Let’s connect!
        </p>
        <div className="md:flex items-center mt-12">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-black">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Dennis Ritchie"
              onChange={handleChange}
              arial-label="Dennis Ritchie"
              className={
                error.nameError === ""
                  ? "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                  : "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 border-2 border-red-500"
              }
            />
            {error.nameError === "" ? null : (
              <p className="text-red-500 text-xs italic mt-2">
                {error.nameError}
              </p>
            )}
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-black">
              Email Address
            </label>
            <input
              className={
                error.emailError === ""
                  ? "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                  : "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 border-2 border-red-500"
              }
              id="email"
              name="email"
              type="text"
              placeholder="dennisritchie@gmail.com"
              onChange={handleChange}
              arial-label="dennisritchie@gmail.com"
            />
            {error.emailError === "" ? null : (
              <p className="text-red-500 text-xs italic mt-2">
                {error.emailError}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-black">
              Phone
            </label>
            <input
              className={
                error.phoneError === ""
                  ? "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                  : "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 border-2 border-red-500"
              }
              id="phone"
              name="phone"
              type="phone"
              placeholder="9876543210"
              onChange={handleChange}
              arial-label="9876543210"
              
            />
            {error.phoneError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.phoneError}
                    </p>
                  )}
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-black">
              Country
            </label>
            <input
              className={
                error.countryError === ""
                  ? "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                  : "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 border-2 border-red-500"
              }
              id="country"
              name="country"
              type="text"
              placeholder="USA"
              onChange={handleChange}
              arial-label="USA"
              
            />
            {error.countryError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.phoneError}
                    </p>
                  )}
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-black">
              Message
            </label>
            <textarea
              className={
                error.messageError === ""
                  ? "h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 resize-none"
                  : "h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 resize-none border-2 border-red-500"
              }
              type="text"
              id="message"
              name="message"
              placeholder="Leave a message"
              onChange={handleChange}
              aria-label="Leave a message"
            ></textarea>
            {error.messageError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.messageError}
                    </p>
                  )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-base font-semibold leading-none text-black py-4 px-10 bg-[#00e5ff] rounded hover:bg-[#66F0FF] duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none">
            SUBMIT
          </button>
        </div>
      </form>
      
    </div>
    </Fade>
  );
}
