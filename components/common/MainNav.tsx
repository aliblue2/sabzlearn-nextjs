"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  MdAddBox,
  MdBook,
  MdCoffee,
  MdFamilyRestroom,
  MdHome,
} from "react-icons/md";
const MainNav = () => {
  const pathName = usePathname();
  return (
    <ul className="flex flex-col items-center justify-start text-sm gap-4 md:flex-row">
      <motion.li className="flex flex-col items-center justify-around gap-1">
        <Link
          href={"/"}
          className={`flex items-center justify-center text-sm gap-1 ${
            pathName === "/" && "text-primaryColor"
          }`}
        >
          <MdHome size={18} /> خانه
        </Link>
        {pathName === "/" && (
          <motion.span
            layoutId="active"
            className="w-full h-[2px] bg-primaryColor"
          ></motion.span>
        )}
      </motion.li>
      <motion.li className="flex flex-col items-center justify-around gap-1">
        <Link
          href={"/cources"}
          className={`flex items-center justify-center text-sm gap-1 ${
            pathName === "/cources" && "text-primaryColor"
          }`}
        >
          <MdBook size={18} />
          دوره ها
        </Link>
        {pathName === "/cources" && (
          <motion.span
            layoutId="active"
            className="w-full h-[2px] bg-primaryColor"
          ></motion.span>
        )}
      </motion.li>
      <motion.li className="flex flex-col items-center justify-around gap-1">
        <Link
          href={"/cources/add"}
          className={`flex items-center justify-center text-sm gap-1 ${
            pathName === "/cources/add" && "text-primaryColor"
          }`}
        >
          <MdAddBox size={18} />
          اضافه کردن دوره
        </Link>
        {pathName === "/cources/add" && (
          <motion.span
            layoutId="active"
            className="w-full h-[2px] bg-primaryColor"
          ></motion.span>
        )}
      </motion.li>
      <motion.li className="flex flex-col items-center justify-around gap-1">
        <Link
          href={"/community"}
          className={`flex items-center justify-center text-sm gap-1 ${
            pathName === "/community" && "text-primaryColor"
          }`}
        >
          <MdFamilyRestroom size={18} />
          انجمن
        </Link>
        {pathName === "/community" && (
          <motion.span
            layoutId="active"
            className="w-full h-[2px] bg-primaryColor"
          ></motion.span>
        )}
      </motion.li>
      <motion.li className="flex flex-col items-center justify-around gap-1">
        <Link
          href={"/about-us"}
          className={`flex items-center justify-center text-sm gap-1 ${
            pathName === "/about-us" && "text-primaryColor"
          }`}
        >
          <MdCoffee size={18} />
          درباره ما
        </Link>
        {pathName === "/about-us" && (
          <motion.span
            layoutId="active"
            className="w-full h-[2px] bg-primaryColor"
          ></motion.span>
        )}
      </motion.li>
    </ul>
  );
};

export default MainNav;
