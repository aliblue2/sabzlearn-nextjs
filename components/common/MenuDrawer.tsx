"use client";
import { motion } from "framer-motion";
import logoIMg from "@/assets/logo.webp";
import logoText from "@/assets/svgexport-35.png";
import Image from "next/image";
import MainNav from "./MainNav";
import { MdCoffee } from "react-icons/md";

const MenuDrawer = ({ close }) => {
  return (
    <motion.div
      className="fixed z-10 top-0 left-0 w-full h-full bg-primaryColor bg-opacity-45"
      onClick={close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "keyframes",
        duration: 0.5,
      }}
    >
      <motion.div
        initial={{ right: -300 }}
        animate={{ right: 0 }}
        exit={{ right: -300 }}
        transition={{
          type: "spring",
          bounce: 0.6,
          duration: 0.7,
        }}
        className="fixed flex-col flex items-center justify-around gap-5 rounded-l-3xl right-0 top-0 w-[70%] h-full bg-white shadow-md"
      >
        <div className="flex items-center justify-center gap-5">
          <Image src={logoIMg} alt="sabzlearn" className="max-w-14" />
          <Image src={logoText} alt="sabzlearn" className="max-w-20" />
        </div>
        <MainNav />
        <span className="text-lg flex items-center justify-center gap-2 font-medium">
          by alireza
          <MdCoffee size={20} />
          made with
        </span>
      </motion.div>
    </motion.div>
  );
};

export default MenuDrawer;
