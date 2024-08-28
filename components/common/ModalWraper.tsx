"use client";
import React, { useRef } from "react";
import Modal from "./Modal";
import { MdArrowBack, MdDelete } from "react-icons/md";
import { AnimatePresence } from "framer-motion";

const ModalWraper = ({ deleteCource }) => {
  const modal = useRef();
  const openModalHandler = () => {
    modal.current.open();
  };
  return (
    <>
      <AnimatePresence>
        <Modal ref={modal}>
          آیا قصد دارید دوره را حذف کنید؟
          <div className="flex items-center justify-center gap-5 w-full">
            <button
              onClick={() => {
                modal.current.close();
                deleteCource();
              }}
              className="bg-red-100 hover:bg-red-500 hover:text-white text-red-500 font-medium flex items-center justify-center gap-2 p-2 my-5 rounded-xl hover:scale-110 transition-all ease-in-out decoration-blue-300"
            >
              آره حتما
              <MdDelete size={18} />
            </button>
            <button
              onClick={() => modal.current.close()}
              className="bg-gray-100 hover:bg-gray-500 hover:text-whiteColor text-gray-500 font-medium flex items-center justify-center gap-2 p-2 my-5 rounded-xl hover:scale-110 transition-all ease-in-out decoration-blue-300"
            >
              بیخیال !
              <MdArrowBack size={18} />
            </button>
          </div>
        </Modal>
      </AnimatePresence>
      <button
        onClick={openModalHandler}
        className="bg-red-100 hover:bg-red-500 hover:text-white text-red-500 font-medium flex items-center justify-center gap-2 p-2 my-5 rounded-xl hover:scale-110 transition-all ease-in-out decoration-blue-300"
      >
        درخواست حذف دوره
        <MdDelete size={18} />
      </button>
    </>
  );
};

export default ModalWraper;
