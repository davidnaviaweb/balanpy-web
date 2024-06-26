import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, data }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setTimeout(() => setAnimationClass("opacity-100 scale-100"), 10);
    } else {
      setAnimationClass("opacity-0 scale-95");
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-md transition-opacity duration-300 ${animationClass}`}
    >
      <div
        className={`relative bg-white rounded-2xl py-16 w-[600px] mx-4 flex flex-col items-center justify-center border-[3px] border-balanpy-800 transition-transform duration-300 transform ${animationClass}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-balanpy hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        >
          Cerrar
        </button>
        <div className="mb-6 flex flex-col items-center">
          <img
            src="/balanpy.svg"
            alt="Logo Balanpy"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-balanpy text-[36px] font-bold">Balanpy</h5>
          <div className="w-1/3 h-[2px] bg-dimGray mt-2 mb-4"></div>
          <h2 className="text-2xl text-balanpy-800 font-semibold mt-2 text-center w-2/3">
            {data.title}
          </h2>
        </div>
        <div>
          <div className="mb-4 items-center">
            <label className="block text-lg font-regular text-gray-700 text-center">
              {data.activity.text}
            </label>
            <input
              type={data.activity.type}
              placeholder={data.activity.placeholder}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
            />
          </div>
          <div className="mb-4 items-center">
            <label className="block text-lg font-regular text-gray-700 text-center">
              {data.registerTime.text}
            </label>
            <input
              type={data.registerTime.type}
              placeholder={data.registerTime.placeholder}
              className="mt-1 block w-full border border-gray-300 rounded-md text-center text-lg p-2 leading-5"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-regular text-gray-700 text-center">
            Observaciones
          </label>
          <textarea
            placeholder="Añade los comentarios que necesites."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-primary bg-balanpy hover:bg-white hover:text-balanpy text-[18px] py-2 px-4 font-poppins font-medium rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out"
          >
            {data.accept}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
