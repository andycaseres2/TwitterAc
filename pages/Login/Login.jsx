import React from "react";
import Image from "next/image";
import { BsTwitter, BsGithub, BsGoogle } from "react-icons/bs";
import twitter from "../../public/twitter.jpg";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="w-full h-full md:h-screen flex flex-col md:flex-row-reverse justify-center items-center overflow-y-scroll bg-black px-8 md:gap-6">
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="flex py-10 ">
          <BsTwitter className="w-12 h-12 fill-white" />
        </div>
        <h1 className="text-5xl my-8 font-semibold">Happening now</h1>
        <p className="text-2xl font-semibold">Join Twitter today.</p>
        <div
          onClick={() => signIn()}
          className="bg-gray-500 rounded-full w-full md:w-1/2 h-10 flex justify-center items-center px-8 my-8 cursor-pointer hover:bg-gray-600 gap-4"
        >
          <h3 className="font-semibold">Login with GitHub</h3>
          <BsGithub className="w-7 h-7" />
        </div>
        <div
          onClick={() => signIn()}
          className="bg-cyan-500 rounded-full w-full md:w-1/2 h-10 flex justify-center items-center px-8 cursor-pointer hover:bg-cyan-600 gap-4"
        >
          <h3 className="font-semibold">Login with GitHub</h3>
          <BsGoogle className="w-7 h-7" />
        </div>

        {/* <div className="w-full pt-8 flex flex-col justify-center items-center">
          <p className="text-xl">Already have an account?</p>
          <div
            onClick={() => setShowLoginModal(true)}
            className="border border-gray-600 rounded-full w-full md:w-1/2 h-10 flex justify-center items-center px-8 my-4 cursor-pointer hover:bg-cyan-500 hover:bg-opacity-10"
          >
            <h3 className="font-semibold text-cyan-500 ">Sign in</h3>
          </div>
        </div> */}
      </div>
      <div className="w-full h-full flex justify-center items-center md:w-1/2 mt-8 md:mt-0">
        <Image src={twitter} alt={"twitter"} width={500} height={610} />
      </div>
    </div>
  );
};
export default Login;
