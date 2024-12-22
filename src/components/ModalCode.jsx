import React from 'react'

const ModalCode = () => {
  return (
    <>
        <h2 className="text-center text-lg font-bold mb-4">Modal Title</h2>
        <p className="mb-6 text-gray-700">
          This is a reusable modal component. Below is how you can use it:
        </p>

        <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-6">
          <pre className="font-mono text-sm leading-relaxed">
            {/* logic */}
            <p className="text-gray-200">First create a state like this :</p>
            <span className="text-blue-400">const</span>
            <span className="text-gray-400"> [</span>
            <span className="text-blue-400">isOpen</span>
            <span className="text-white"> , </span>
            <span className="text-yellow-400">setIsOpen</span>
            <span className="text-gray-400">]</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">useState</span>
            <span className="text-violet-600">(</span>
            <span className="text-blue-400">false</span>
            <span className="text-violet-600">)</span>
            <br />
            <span className="text-blue-400">const </span>
            <span className="text-yellow-400">openModal</span>
            <span className="text-white"> = </span>
            <span className="text-violet-600">()</span>
            <span className="text-blue-400"> =&gt; </span>
            <span className="text-yellow-400">setIsOpen</span>
            <span className="text-violet-600">(</span>
            <span className="text-blue-400">true</span>
            <span className="text-violet-600">)</span>
            <br />
            <span className="text-blue-400">const </span>
            <span className="text-yellow-400">closeModal</span>
            <span className="text-white"> = </span>
            <span className="text-violet-600">()</span>
            <span className="text-blue-400"> =&gt; </span>
            <span className="text-yellow-400">setIsOpen</span>
            <span className="text-violet-600">(</span>
            <span className="text-blue-400">false</span>
            <span className="text-violet-600">)</span>
            <br />
            <br />
            <p className="text-gray-200">
              Second , create a function like this :
            </p>
            <span className="text-blue-400">&lt;Modal</span>{" "}
            <span className="text-green-400">onClose</span>
            <span className="text-white">=</span>
            <span className="text-yellow-400">{`{closeModal}`}</span>{" "}
            <span className="text-green-400">insideClick</span>
            <span className="text-white">=</span>
            <span className="text-yellow-400">{`{true}`}</span> <br />
            <span className="text-green-400">btnClose</span>
            <span className="text-white">=</span>
            <span className="text-yellow-400">{`{true}`}</span>{" "}
            <span className="text-green-400">isOpen</span>
            <span className="text-white">=</span>
            <span className="text-yellow-400">{`{isOpen}`}</span>
            <span className="text-blue-400">&gt;</span>
            <br />
            <span className="text-gray-400"> // Your content here :)</span>
            <br />
            <span className="text-blue-400">&lt;/Modal&gt;</span>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Prop Details:</h3>
          <div className="mb-2">
            <span className="font-medium text-gray-800">onClose:</span>{" "}
            <span className="text-gray-600">
              Function called when the modal is closed. Use it for cleanup or
              additional actions.
            </span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-800">insideClick:</span>{" "}
            <span className="text-gray-600">
              A boolean to prevent the modal from closing when clicking inside
              the modal.
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-800">btnClose:</span>{" "}
            <span className="text-gray-600">
              If true, a close button will be displayed at the top-right.
            </span>
          </div>
        </div> 
    </>
  )
}

export default ModalCode
