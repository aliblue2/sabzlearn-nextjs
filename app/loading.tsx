"use client";

import Lottie from "lottie-react";
import loadingAnime from "@/lottie/loading.json";
export default function LoadingPage() {
  return (
    <div className="max-w-[600px] mx-auto w-full flex items-center justify-center">
      <Lottie animationData={loadingAnime} loop width={200} height={200} />
    </div>
  );
}
