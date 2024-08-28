"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ImagePicker = ({ name, label }) => {
  const fileInp = useRef();
  const opneFileHandler = () => {
    fileInp.current.click();
  };

  const [pickedImgSrc, setPickedImgSrc] = useState(undefined);

  const pickImageByUser = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPickedImgSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <label className="text-sm font-medium">{label}</label>
      <input
        onChange={pickImageByUser}
        ref={fileInp}
        className="hidden"
        type="file"
        name={name}
        accept="image/png, image/gif, image/jpeg"
      />
      <div className="flex flex-col items-center justify-center gap-5">
        <button
          onClick={opneFileHandler}
          type="button"
          className="w-fit bg-primaryColor hover:bg-accentColor transition-colors duration-300 p-2 text-xs rounded-xl text-white font-medium"
        >
          انتخاب عکس
        </button>
        <div className="border w-20 h-20 overflow-hidden relative text-xs border-primaryColor border-dashed flex items-center justify-center rounded-full p-2">
          {pickedImgSrc !== undefined && pickedImgSrc !== null ? (
            <Image
              fill
              src={pickedImgSrc}
              alt="pciked user image"
              className="absolute top-0 h-32 left-0 w-full  object-cover"
            />
          ) : (
            " محل نمایش عکس"
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
