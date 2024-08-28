"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdHome } from "react-icons/md";

const CourceNav = () => {
  const pathName = usePathname();
  const pathNameArr = pathName.split("/");

  return (
    <div className="flex items-center justify-start gap-2 mb-5 divide-x-4 divide-dashed  divide-emerald-200">
      {pathNameArr.map((path, i) => {
        return (
          <Link
            href={i > 1 ? path : `/${path}`}
            key={i}
            className={`px-4 py-1 rounded-l-xl bg-white shadow-sm`}
          >
            {path === "" ? <MdHome size={20} /> : path}
          </Link>
        );
      })}
    </div>
  );
};

export default CourceNav;
