"use client";

import { motion } from "framer-motion";
import React from "react";

const SecondaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      {...props}
      className="bg-secondaryColor text-sm flex items-center justify-center gap-2 text-white font-medium rounded-full p-2"
    >
      {children}
    </motion.button>
  );
};

export default SecondaryBtn;
