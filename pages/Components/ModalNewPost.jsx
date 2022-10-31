import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { AiOutlineFileGif, AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { UserApp } from "../Context/Context";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

const ModalNewPost = ({ nightMode, setShowModal }) => {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();
  const { addTwit } = UserApp();

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
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-black bg-opacity-50 flex justify-center z-[100] absolute top-0 w-full h-full ">
      <div
        className={`flex w-full h-full md:w-4/5 lg:w-1/2 md:h-max md:rounded-2xl md:mt-16 justify-center pt-14 px-4 md:px-4 relative ${
          nightMode ? "bg-[#1e2732]" : "bg-white"
        } `}
      >
        <div className="w-14 rounded-full h-14 aspect-square flex justify-start items-start">
          <picture>
            <img
              className="rounded-full"
              src={session.user?.image}
              alt={session.user?.name}
            />
          </picture>
        </div>
        <div className="w-full flex flex-col">
          <div
            className={`flex flex-col gap-2 text-black border-b border-gray-600 px-4 w-full ${
              nightMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleComment}
                className={`h-12 w-full focus:outline-none rounded-md placeholder:text-xl mb-12 ${
                  nightMode ? "bg-[#1e2732] text-white" : "bg-white"
                }`}
                type="text"
                placeholder="¿Qué está pasando?"
              />
              <button
                className={` ${
                  comment.length < 2 && "hidden"
                } absolute w-max h-max top-3 right-3 md:bottom-3 bg-cyan-400 hover:bg-cyan-500 px-8 py-2 rounded-full text-white text-md font-semibold`}
              >
                Twitter
              </button>
            </form>
            <div
              className={`flex w-max gap-1 items-center my-3 cursor-pointer ${
                nightMode
                  ? "hover:bg-blue-300 hover:bg-opacity-20"
                  : "hover:bg-blue-200"
              } px-2 rounded-full`}
            >
              <BiWorld className="fill-cyan-400" />
              <p className="text-xs md:text-sm text-cyan-400 font-semibold">
                Cualquier persona puede responder
              </p>
            </div>
          </div>
          <div className="w-full flex text-black justify-between items-center pr-6 py-4 pb-6">
            <div className="w-full flex text-black justify-center md:justify-between items-center  my-2">
              <div className="w-max flex gap-4">
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
        <div
          onClick={() => setShowModal(false)}
          className={`flex justify-center items-center rounded-full ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } cursor-pointer w-10 h-10 absolute top-1 left-2`}
        >
          <div className="flex items-center gap-2">
            <AiOutlineClose
              className={`w-5 h-5 ${nightMode ? "fill-white" : "fill-black"} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewPost;
