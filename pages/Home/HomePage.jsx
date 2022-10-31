import React, { useState } from "react";
import NavbarMobile from "../Components/NavbarMobile";
import Navbar from "../Components/Navbar";
import FooterMobile from "../Components/FooterMobile";
import Main from "../Components/Main";
import ModalNewPost from "../Components/ModalNewPost";

const HomePage = () => {
  const [nightMode, setNightMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`body w-full h-full flex flex-col md:flex-row ${
        nightMode ? "bg-[#1e2732]" : "bg-white"
      }`}
    >
      <NavbarMobile setNightMode={setNightMode} nightMode={nightMode} />

      <Navbar nightMode={nightMode} setShowModal={setShowModal} />
      <Main
        setNightMode={setNightMode}
        nightMode={nightMode}
        setShowModal={setShowModal}
      />

      <FooterMobile nightMode={nightMode} />
      {showModal && (
        <ModalNewPost nightMode={nightMode} setShowModal={setShowModal} />
      )}
    </div>
  );
};
export default HomePage;
