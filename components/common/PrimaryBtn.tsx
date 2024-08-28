"use client";

import React from "react";
import { motion } from "framer-motion";
const PrimaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      {...props}
      className="bg-primaryColor text-sm flex items-center justify-center gap-2 hover:bg-accentColor text-white font-medium rounded-full p-2"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryBtn;
