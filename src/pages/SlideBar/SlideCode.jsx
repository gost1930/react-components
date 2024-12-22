import React from "react";

const SlideCode = () => {
  return (
    <>
      <h2 className="text-center text-lg font-bold mb-4">Slide Title</h2>
      <p className="mb-6 text-gray-700">
        This is a reusable slide bar component. Below is how you can use it:
      </p>

      <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-6">
        <pre className="font-mono text-sm leading-relaxed">
          {/* logic */}
          <p className="text-gray-200">First create a state like this :</p>
          <span className="text-blue-400">const</span>
          <span className="text-gray-400"> [</span>
          <span className="text-blue-400">isOpenSlide</span>
          <span className="text-white"> , </span>
          <span className="text-yellow-400">setIsOpenSlide</span>
          <span className="text-gray-400">]</span>
          <span className="text-white"> = </span>
          <span className="text-yellow-400">useState</span>
          <span className="text-violet-600">(</span>
          <span className="text-blue-400">false</span>
          <span className="text-violet-600">)</span>
          <br />
          <span className="text-blue-400">const </span>
          <span className="text-yellow-400">setIsOpenSlide</span>
          <span className="text-white"> = </span>
          <span className="text-violet-600">()</span>
          <span className="text-blue-400"> =&gt; </span>
          <span className="text-yellow-400">setIsOpen</span>
          <span className="text-violet-600">(</span>
          <span className="text-blue-400">!isOpenSlide</span>
          <span className="text-violet-600">)</span>
          <br />
          <br />
          <p className="text-gray-200">
            Second , create a function like this :
          </p>
          <span className="text-blue-400">&lt;SlideBar</span>{" "}
          <span className="text-green-400">isOpenSlide</span>
          <span className="text-white">=</span>
          <span className="text-yellow-400">{`{isOpenSlide}`}</span>{" "}
          <span className="text-blue-400">&gt;</span>
          <br />
          <span className="text-gray-400"> // Your content here :)</span>
          <br />
          <span className="text-blue-400">&lt;/SlideBar&gt;</span>
        </pre>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Prop Details:</h3>
        <div className="mb-2">
          <span className="font-medium text-gray-800">isOpenSlide:</span>{" "}
          <span className="text-gray-600">
            Its a boolean value that determines whether the slide bar is open or
            not.
          </span>
        </div>
      </div>
    </>
  );
};

export default SlideCode;
