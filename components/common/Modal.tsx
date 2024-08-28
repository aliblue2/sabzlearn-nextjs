"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return (
    <dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={dialog}
      className="max-w-[250px] mx-auto w-full rounded-xl bg-white shadow-md backdrop:bg-primaryColor backdrop:bg-opacity-30 p-5"
    >
      {children}
    </dialog>
  );
});

export default Modal;
