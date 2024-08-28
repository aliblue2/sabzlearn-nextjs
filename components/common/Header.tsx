"use client";
import { MdMenu, MdPerson, MdShoppingBag } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.webp";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import Link from "next/link";
import MainNav from "./MainNav";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
const Header = () => {
  const [menuDrawerState, setMenuDrawerState] = useState(false);
  const menuDrawerToggler = () => {
    setMenuDrawerState(!menuDrawerState);
  };
  return (
    <>
      <header className="w-full z-10 bg-white h-16 shadow-sm">
        <div className="flex px-4 items-center justify-between gap-5 max-w-[1100px] mx-auto h-full">
          <div className="flex items-center justify-start gap-3">
            <MdMenu
              onClick={menuDrawerToggler}
              size={24}
              className="md:hidden cursor-pointer"
            />
            <Link href={"/"}>
              <Image className="max-w-14" src={logoImg} alt="sabz learn logo" />
            </Link>
            <div className="hidden md:block">
              <MainNav />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <SecondaryBtn>
              <MdShoppingBag size={18} />
              <span className="hidden md:block">سبدخرید</span>
            </SecondaryBtn>
            <PrimaryBtn>
              <MdPerson size={18} />

              <span className="hidden md:block">ورود | ثبت نام</span>
            </PrimaryBtn>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuDrawerState && <MenuDrawer close={menuDrawerToggler} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
