import React from "react";
import { AiOutlineEllipsis, AiOutlineSync } from "react-icons/ai";
import { BsChat, BsShare, BsHeart } from "react-icons/bs";

const Post = ({ nightMode, twit }) => {
  const date = twit.data.createdAt.toDate().toString().slice(0, 15);
  return (
    <div
      className={`w-full h-max flex px-4 pt-4 pb-6 relative border-t border-gray-700 cursor-pointer ${
        nightMode
          ? "hover:bg-gray-700 border-gray-700"
          : "hover:bg-gray-200 border-gray-200"
      }`}
    >
      <div className="w-full flex gap-4">
        <div className="w-16 h-full rounded-full aspect-square">
          <picture>
            <img
              className="rounded-full"
              src={twit.data.avatar}
              alt={twit.data.userName}
            />
          </picture>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full flex gap-2 items-center justify=center">
            <h3 className="text-base font-bold w-max">Andy Caseres</h3>
            <h4 className="text-gray-500 text-base font-medium w-max">
              @{twit.data.userName}
            </h4>
            <p className="text-sm font-medium w-max absolute bottom-2 left-50">
              {date}
            </p>
          </div>
          <p className="pb-2 text-base">{twit.data.content}</p>

          {/* <Image src={sasuke} alt={"sasuke"} /> */}

          <div className="flex w-full items-center justify-between px-8 py-2">
            <div className="gap-2 flex justify-center items-center h-8 w-max ">
              <BsChat className="w-5 h-5 cursor-pointer hover:fill-cyan-500" />
              <span></span>
            </div>

            <div className="gap-2 flex justify-center items-center h-8 w-max">
              <AiOutlineSync className="w-5 h-5 cursor-pointer hover:fill-green-500" />
              <span></span>
            </div>

            <div className="gap-2 flex justify-center items-center h-8 w-max">
              <BsHeart className="w-5 h-5 cursor-pointer hover:fill-red-500" />
              <span>{twit.data.likedsCount}</span>
            </div>

            <div className=" flex justify-center items-center h-8 w-">
              <BsShare className="w-5 h-5 cursor-pointer hover:fill-blue-500" />
            </div>
          </div>
        </div>

        {/* <AiOutlineEllipsis
          className={`w-8 h-8 ${
            nightMode
              ? "hover:bg-cyan-100 hover:fill-cyan-500"
              : "hover:bg-cyan-100 hover:fill-cyan-500"
          } rounded-full absolute top-1 right-4 cursor-pointer`}
        /> */}
      </div>
    </div>
  );
};
export default Post;
