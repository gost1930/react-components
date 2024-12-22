import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import SlideBar from "./SlideBar/SlideBar";
import ModalCode from "../components/ModalCode";

const Home = () => {
  const btn = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Drop Down", path: "/drop-down" },
    { id: 3, name: "Modal", isModal: true },
    { id: 4, name: "Slide Bar", isSlide: true },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSlide, setIsOpenSlide] = useState(false);

  // Modal Function
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Slide Bar Function
  const hadleSlide = () => setIsOpenSlide(!isOpenSlide);

  return (
    <div className="w-full h-fit">
      <h1 className="text-zinc-800 text-3xl font-bold mb-4">Components</h1>
      <div className="grid grid-cols-5 gap-4">
        {btn.map((item) =>
          item.isModal ? (
            <button
              key={item.id}
              onClick={openModal}
              className="text-blue-500 hover:underline"
            >
              {item.name}
            </button>
          ) : item.isSlide ? (
            <button
              key={item.id}
              className="text-blue-500 hover:underline"
              onClick={hadleSlide}
            >
              {item.name}
            </button>
          ) : (
            <Link
              key={item.id}
              to={item.path}
              className="text-blue-500 hover:underline"
            >
              {item.name}
            </Link>
          )
        )}

        {/* Modal */}
        <Modal
          onClose={closeModal}
          insideClick={true}
          btnClose={true}
          isOpen={isOpen}
        >
          <ModalCode />
        </Modal>

        {/* Slide Bar */}
        <SlideBar isOpenSlide={isOpenSlide}></SlideBar>
      </div>
    </div>
  );
};

export default Home;
