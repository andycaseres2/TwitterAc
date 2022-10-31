import React, { useState, useEffect } from "react";
import Post from "./Post";
import SideBarRight from "./SideBarRight";
import {
  BsPencilSquare,
  BsStars,
  BsCardImage,
  BsEmojiSmile,
} from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { AiOutlineFileGif } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { UserApp } from "../Context/Context";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

const Main = ({ nightMode, setNightMode, setShowModal }) => {
  const [comment, setComment] = useState("");
  const { addTwit, twits, getTwits, setTwits } = UserApp();
  const { data: session } = useSession();

  useEffect(() => {
    session && getTwits().then(setTwits);
  }, [session, getTwits, setTwits]);

  const handleComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTwit({
      avatar: session.user.image,
      content: comment,
      userId: uuidv4(),
      userName: session.user.name,
    })
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="w-full h-screen overflow-y-hidden md:overflow-y-scroll scroll-smooth relative">
      <div
        className={`md:pr-20 lg:pr-80 w-full h-screen flex overflow-y-scroll my-14 md:my-0 ${
          nightMode ? "bg-[#1e2732] text-white" : "bg-white text-black"
        }  `}
      >
        <div className=" flex flex-col w-full ">
          <div className="hidden md:flex w-full mt-14 justify-center py-2 px-4">
            <div className="w-14 rounded-full h-14 aspect-square flex justify-start items-start">
              <picture>
                <img
                  className="rounded-full"
                  src={session.user?.image}
                  alt={session.user?.name}
                />
              </picture>
            </div>
            <div className="w-full flex flex-col relative">
              <div
                className={`flex flex-col gap-2 text-black border-b  px-4 w-full ${
                  nightMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <form onSubmit={handleSubmit}>
                  <input
                    onChange={handleComment}
                    className={`h-12 w-full focus:outline-none rounded-md placeholder:text-xl ${
                      nightMode ? "bg-[#1e2732] text-white" : "bg-white"
                    }`}
                    type="text"
                    placeholder="¿Qué está pasando?"
                  />
                  <div
                    className={`flex w-max gap-1 items-center my-3 cursor-pointer ${
                      nightMode
                        ? "hover:bg-blue-300 hover:bg-opacity-20"
                        : "hover:bg-blue-200"
                    } px-2 rounded-full`}
                  >
                    <BiWorld className="fill-cyan-400" />
                    <p className="text-sm text-cyan-400 font-semibold">
                      Cualquier persona puede responder
                    </p>
                  </div>
                  <button
                    className={`${
                      comment.length < 2 && "hidden"
                    } bg-cyan-400 hover:bg-cyan-500 px-8 py-2 rounded-full text-white text-md font-semibold absolute bottom-1 right-0 w-max z-50`}
                  >
                    Twitter
                  </button>
                </form>
              </div>

              <div className="w-full flex text-black justify-between items-center pl-2 pr-6 my-2 relative lg:right-16 xl:right-0">
                <div className="w-max flex gap-6">
                  <div
                    className={`w-9 h-9  flex justify-center items-center rounded-full ${
                      nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <BsCardImage className="w-5 h-5 fill-cyan-400 cursor-pointer" />
                  </div>
                  <div
                    className={`w-9 h-9  flex justify-center items-center rounded-full ${
                      nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <AiOutlineFileGif className="w-5 h-5 fill-cyan-400 cursor-pointer" />
                  </div>
                  <div
                    className={`w-9 h-9  flex justify-center items-center rounded-full ${
                      nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <ImStatsBars className="w-5 h-5 fill-cyan-400 cursor-pointer" />
                  </div>
                  <div
                    className={`w-9 h-9  flex justify-center items-center rounded-full ${
                      nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <BsEmojiSmile className="w-5 h-5 fill-cyan-400 cursor-pointer" />
                  </div>
                  <div
                    className={`w-9 h-9  flex justify-center items-center rounded-full ${
                      nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <GoLocation className="w-5 h-5 fill-cyan-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {twits?.map((item) => {
              return <Post key={item.id} twit={item} nightMode={nightMode} />;
            })}
          </div>
        </div>
        <SideBarRight setNightMode={setNightMode} nightMode={nightMode} />
      </div>

      <div
        className={`w-full h-14 md:pr-20 ${
          nightMode ? "bg-[#1e2732] text-white" : "bg-white text-black"
        }  lg:pr-80  absolute top-0 z-30 bg-opacity-50 justify-between items-center px-4 hidden md:flex`}
      >
        <h3 className="text-xl cursor-pointer">Inicio</h3>
        <BsStars className="w-7 h-7 mr-8 cursor-pointer fill-cyan-400" />
      </div>
      <div
        onClick={() => setShowModal(true)}
        className="w-12 h-12 rounded-full absolute bottom-16 right-4 z-50 bg-cyan-500 md:hidden flex items-center justify-center mt-6 hover:bg-cyan-600 cursor-pointer lg:gap-2"
      >
        <BsPencilSquare className="w-6 h-6 fill-white" />
      </div>
    </div>
  );
};
export default Main;
