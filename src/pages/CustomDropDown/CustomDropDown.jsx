import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


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
    {
      id: 4,
      title: "drop4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
    {
      id: 5,
      title: "drop5",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
    {
      id: 6,
      title: "drop6",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus laudantium sint adipisci, commodi aut similique amet minima. Totam reprehenderit voluptate eligendi, ut, ipsum provident pariatur in porro mollitia omnis esse cum! Accusantium dolorem aperiam, quia ex sed, obcaecati incidunt ipsa molestias placeat eos adipisci quae rem nemo nam pariatur.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const dropDown = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col items-center h-screen w-full mx-auto gap-y-5 mt-10 overflow-x-hidden">
      <h1 className="text-zinc-800 text-5xl font-bold">This is a drop down</h1>
      {/* drop down list */}
      <div className="flex flex-col w-full px-40">
        {btn.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-3 w-full px-2 border-b py-4"
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
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                isOpen === item.id ? "max-h-40" : ""
              }`}
            >
              {isOpen === item.id && (
                <p className="text-zinc-500 transition-colors">
                  {item.description}
                </p>
                // or any content here but you should add more max hight to show all your content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropDown;
