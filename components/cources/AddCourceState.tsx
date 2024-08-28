"use client";

import { useFormStatus } from "react-dom";

const AddCourceState = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full rounded-xl bg-primaryColor hover:bg-accentColor text-white font-medium text-sm p-2 transition-colors duration-300"
    >
      {pending ? "در حال ثبت دوره ..." : "ثبت دوره"}
    </button>
  );
};

export default AddCourceState;
