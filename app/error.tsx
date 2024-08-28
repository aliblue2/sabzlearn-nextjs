"use client";
import notfoundImg from "@/assets/404.png";
import Image from "next/image";

import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex max-w-[600px] overflow-hidden mx-auto flex-col items-center justify-center gap-5">
      <Image src={notfoundImg} className="w-full " alt="error image"  />
      <h5 className="text-6xl font-medium text-primaryColor">an error occured</h5>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
