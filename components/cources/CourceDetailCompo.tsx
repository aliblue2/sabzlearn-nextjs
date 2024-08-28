import { getCource } from "@/lib/api-db";
import React from "react";
import CourceNav from "./Nav";
import PrimaryBtn from "../common/PrimaryBtn";
import {
  MdCalendarMonth,
  MdInfo,
  MdShoppingCart,
  MdTimer,
} from "react-icons/md";

const CourceDetailCompo = async ({ cource }) => {
  return (
    <>
      <CourceNav />
      <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={cource.image}
          alt={cource.title}
          className="rounded-2xl block md:hidden"
        />

        <div className="flex flex-col items-start justify-center gap-8">
          <h3 className="text-2xl font-medium">{cource.title}</h3>
          <p
            className="font-medium line-clamp-5"
            dangerouslySetInnerHTML={{
              __html: cource.description,
            }}
          ></p>
          <div className="flex items-center justify-between gap-5 w-full">
            <PrimaryBtn>
              <MdShoppingCart size={20} />
              افزودن به سبد خرید
            </PrimaryBtn>
            <h6 className="text-xl md:text-2xl font-medium">
              {cource.price.toLocaleString("fa-IR") + " تومان"}
            </h6>
          </div>
        </div>
        <img
          src={cource.image}
          alt={cource.title}
          className="rounded-2xl hidden md:block"
        />
      </main>
      <div className="grid-cols-1 md:grid-cols-3 gap-5 grid mt-12 w-full">
        <div className="grid-cols-2 md:grid-cols-3 grid col-span-2 md:col-span-2 gap-2 w-full">
          <div className="flex md:p-0 px-1 py-2 bg-white rounded-xl  items-center justify-center gap-5">
            <MdInfo size={32} className="text-primaryColor" />
            <div className="flex ذلصاه flex-col items-start justify-around">
              <h6 className="text-lg font-medium">وضعیت دوره</h6>
              <span className="text-sm text-gray-500">آنلاین</span>
            </div>
          </div>
          <div className="flex md:p-0 px-1 py-2 bg-white rounded-xl  items-center justify-center gap-5">
            <MdTimer size={32} className="text-primaryColor" />
            <div className="flex ذلصاه flex-col items-start justify-around">
              <h6 className="text-lg font-medium">مدت زمان دوره</h6>
              <span className="text-sm text-gray-500">
                {cource.cource_time}
              </span>
            </div>
          </div>
          <div className="flex md:p-0 px-1 py-2 bg-white rounded-xl  items-center justify-center gap-5">
            <MdCalendarMonth size={32} className="text-primaryColor" />
            <div className="flex ذلصاه flex-col items-start justify-around">
              <h6 className="text-lg font-medium">بروزرسانی دوره</h6>
              <span className="text-sm text-gray-500">
                {cource.release_date}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex w-full items-center justify-start gap-5 bg-white  rounded-xl p-5">
          <img
            src={cource.teacher_image}
            alt={cource.teacher}
            className="rounded-full w-12 border-2 border-primaryColor"
          />
          <h6 className="font-medium">{cource.teacher}</h6>
          <span className="px-2 py-1 bg-primaryColor bg-opacity-20 rounded-full text-primaryColor text-xs">
            مدرس دوره
          </span>
        </div>
      </div>
    </>
  );
};

export default CourceDetailCompo;
