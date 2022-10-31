import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const ModalSign = ({ setShowModal, title, text }) => {
  return (
    <div className="bg-black bg-opacity-50 flex justify-center z-[100] absolute top-0 w-full h-full ">
      <div
        className={`flex w-full h-full md:w-4/5 lg:w-1/2 md:h-max md:rounded-2xl md:mt-16 justify-center pt-14 px-4 md:px-4 relative bg-black`}
      >
        <div className="w-full h-max px-4">
          <p className="text-2xl font-semibold py-4 mt-8">{title} to Twitter</p>
          <form className="flex flex-col gap-4 my-4">
            <input
              className="bg-transparent px-2 focus:outline-none h-14 border border-gray-600 rounded bg-gray-900 placeholder:px-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-transparent px-2 focus:outline-none h-14 border border-gray-600 rounded bg-gray-900 placeholder:px-2"
              type="password"
              placeholder="Password"
            />

            <button className="bg-transparent text-white h-11 rounded-full border border-white font-semibold my-4 hover:bg-white hover:text-black">
              {title}
            </button>
          </form>
          <div className="flex gap-2 mt-10 mb-6 w-full justify-center">
            <p className="text-gray-400">
              {title === "Log in"
                ? `Don't have an account?`
                : `Do have an account?`}
            </p>
            <button className="text-cyan-500 hover:text-blue-500 hover:underline">
              {text}
            </button>
          </div>
        </div>

        <BsTwitter className="fill-white w-8 h-8 absolute top-2" />
        <div
          onClick={() => setShowModal(false)}
          className={`flex justify-center items-center rounded-full cursor-pointer w-10 h-10 absolute top-1 left-2`}
        >
          <div className="rounded-full gap-2 hover:bg-gray-800 h-10 w-10 flex justify-center items-center">
            <AiOutlineClose className={`w-5 h-5 fill-white" `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSign;
