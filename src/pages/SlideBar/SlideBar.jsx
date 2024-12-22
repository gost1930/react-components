import { useState } from "react";
import Modal from "../Modal/Modal";
import SlideCode from "./SlideCode";

const SlideBar = ({ isOpenSlide, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      id="slide"
      className={`absolute top-0 ${
        isOpenSlide ? "left-0" : "-left-56"
      } duration-300 bg-gradient-to-b from-gray-200 to-gray-100 shadow-lg pl-3 pr-6 w-56 py-5 px-2 rounded-r-lg`}
    >
      {children}
      <h1 className="text-zinc-800 text-2xl font-bold mb-5 text-center">
        Slide Bar
      </h1>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-3 text-zinc-700">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>- Dashboard</li>
            <li>- Profile</li>
            <li>- Settings</li>
            <li>- Logout</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-3 text-zinc-700">
          <h2 className="font-semibold text-lg">Stats Overview</h2>
          <p className="mt-2 text-sm">
            - Active Users: <span className="font-bold">24</span>
          </p>
          <p className="text-sm">
            - Total Sales: <span className="font-bold">$1200</span>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 text-zinc-700">
          <h2 className="font-semibold text-lg">Notifications</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>- You have 3 new messages</li>
            <li>- 2 pending tasks</li>
            <li>- Update available</li>
          </ul>
        </div>
      </div>

      <button
        onClick={openModal}
        className="mt-5 w-full text-center bg-green-500 rounded py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Show the Code
      </button>

      <Modal
        onClose={closeModal}
        insideClick={true}
        btnClose={true}
        isOpen={isOpen}
      >
        <SlideCode />
      </Modal>
    </div>
  );
};

export default SlideBar;
