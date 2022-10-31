import React, { useState } from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BsTwitter, BsPencilSquare, BsSearch } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { AiOutlineEllipsis, AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

const Navbar = ({ nightMode, setShowModal }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { data: session } = useSession();
  return (
    <nav
      className={`hidden md:flex z-10 md:w-1/5 lg:w-96 lg:pl-8 h-screen border-r ${
        nightMode ? "border-gray-700" : "border-gray-200"
      } flex-col justify-between items-center lg:items-end gap-8 pt-4`}
    >
      <div className="w-full flex flex-col items-center justify-center lg:items-start lg:pl-2">
        <div
          className={`flex justify-center items-center rounded-full cursor-pointer w-14 h-14 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-cyan-100"
          }`}
        >
          <BsTwitter
            className={`w-7 h-7 ${nightMode ? "fill-white" : "fill-cyan-500"}`}
          />
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex w-full h-full items-center justify-center gap-4">
            <RiHome7Fill
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Inicio
            </h3>
          </div>
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <BsSearch
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Buscador
            </h3>
          </div>
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <BiBell
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Notificaciones
            </h3>
          </div>
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <AiOutlineMail
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Mensajes
            </h3>
          </div>
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <FaUserAlt
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Perfil
            </h3>
          </div>
        </div>

        <div
          className={`flex justify-center items-center rounded-full  cursor-pointer w-max px-4 h-12 ${
            nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <AiOutlineEllipsis
              className={`w-7 h-7 ${
                nightMode ? "fill-white" : "fill-gray-900"
              }`}
            />
            <h3
              className={`text-xl  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Mas opciones
            </h3>
          </div>
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="w-12 lg:w-44 h-12 rounded-full  bg-cyan-500 flex items-center justify-center mt-6 hover:bg-cyan-600 cursor-pointer lg:gap-2"
        >
          <BsPencilSquare className="w-6 h-6 fill-white" />
          <h3 className="text-xl hidden lg:block">Twittear</h3>
        </div>

        <div
          onClick={() => setShowPopUp(!showPopUp)}
          className={`relative flex justify-center items-center rounded-full cursor-pointer w-max h-16 mt-44 gap-2 px-4 ${
            nightMode ? "lg:hover:bg-gray-700" : "lg:hover:bg-gray-200"
          }`}
        >
          <picture>
            <img
              className="rounded-full aspect-square"
              src={session.user?.image}
              alt={session.user?.name}
              width={50}
              height={50}
            />
          </picture>

          <div className={`flex flex-col w-max items-center justify-center `}>
            <h3
              className={`text-md  hidden lg:block ${
                !nightMode && "text-gray-900"
              }`}
            >
              Andy Caseres
            </h3>
            <h3 className="text-gray-500 hidden lg:block">@AndyCaseres</h3>
          </div>
          <AiOutlineEllipsis
            className={`w-8 ml-2 h-8 cursor-pointer  rounded-full hidden lg:block ${
              !nightMode && "fill-gray-900 "
            }`}
          />
        </div>
        {showPopUp && (
          <div
            onClick={() => signOut()}
            className={`w-48 h-max p-4 flex justify-center absolute bottom-16 left-14 rounded-full ${
              nightMode
                ? "bg-gray-700 hover:bg-gray-200 text-white hover:text-black"
                : "bg-gray-200 text-black hover:bg-gray-700 hover:text-white"
            } z-50 cursor-pointer`}
          >
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
