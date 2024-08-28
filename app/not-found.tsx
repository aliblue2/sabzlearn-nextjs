import notfoundImg from "@/assets/404.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-5">
      <Image src={notfoundImg} alt="not-found" />
      <p className="text-lg font-medium">
        متاسفانه صفحه مورد نظر شما پیدا نشد.
      </p>
      <Link
        href={"/"}
        className="bg-primaryColor font-medium text-white p-2 rounded-full"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default NotFound;
