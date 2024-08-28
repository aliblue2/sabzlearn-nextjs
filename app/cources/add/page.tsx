"use client";

import AddCourceState from "@/components/cources/AddCourceState";
import ImagePicker from "@/components/cources/ImagePicker";
import { saveCource } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function AddNewCource() {
  const [state, action] = useFormState(saveCource, {
    message: null,
  });
  return (
    <>
      <form
        action={action}
        className="flex flex-col items-center justify-start gap-5 w-full max-w-[600px] mx-auto"
      >
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            نام شما :
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل معین باغشیخی"
          />
        </div>
        <ImagePicker name={"profile_image"} label={"عکس شما :"} />
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            نام دوره شما :
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل متخصص اندروید"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="description" className="text-sm font-medium">
            توضیحات دوره شما :
          </label>
          <textarea
            rows={5}
            name="description"
            id="description"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل API یکی از پر کاربردترین اجزای نرم افزاریه که...

 "
          />
        </div>
        <ImagePicker name={"cource_image"} label={"عکس دوره شما :"} />

        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="price" className="text-sm font-medium">
            قمیت دوره شما :
          </label>
          <input
            required
            type="number"
            name="price"
            min="0"
            id="price"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل : ۳۰۰۰ هزار تومان"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="time" className="text-sm font-medium">
            مدت زمان دوره شما :
          </label>
          <input
            required
            min="0"
            type="number"
            name="time"
            id="time"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل : ۳۰ ساعت"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="date" className="text-sm font-medium">
            تاریخ ارايه دوره شما :
          </label>
          <input
            required
            type="date"
            name="date"
            id="date"
            className="w-full text-sm rounded-xl border focus:border-primaryColor outline-none bg-white p-2 transition-colors duration-300"
            placeholder=" مثل : ۳۰۰۰ هزار تومان"
          />
        </div>
        <AddCourceState />
        <h6 className="text-red-500 font-medium text-lg">
          {state && state.message !== null && state.message}
        </h6>
      </form>
    </>
  );
}
