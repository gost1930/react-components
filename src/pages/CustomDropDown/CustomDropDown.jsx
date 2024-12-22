import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
const CustomDropDown = () => {
  const btn = [
    {
      id: 1,
      title: "drop1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
    {
      id: 2,
      title: "drop2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
    {
      id: 3,
      title: "drop3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const dropDown = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };
  console.log(isOpen);
  return (
    <div className="flex flex-col items-center h-screen w-screen mx-auto gap-y-5 mt-10 overflow-hidden">
      <h1 className="text-zinc-800 text-5xl font-bold">This is a drop down</h1>
      {/* drop down list */}
      <div className="flex flex-col w-full px-40">
        {btn.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-3 w-full px-2 border-b py-4  duration-500 ${
              isOpen === item.id
                ? "dropDownAnimation"
                : "dropDownAnimationReverse"
            }`}
          >
            <div
              onClick={() => dropDown(item.id)}
              className="flex flex-row items-center justify-between group w-full cursor-pointer"
            >
              <h1 className="text-zinc-900 text-xl group-hover:text-blue-500 font-semibold">
                {item.title}
              </h1>
              <IoIosArrowDown
                className={`group-hover:text-blue-500 duration-300 ${
                  isOpen === item.id && "rotate-180 text-blue-500"
                }`}
              />
            </div>
            {isOpen === item.id && <p className="text-zinc-500">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropDown;
