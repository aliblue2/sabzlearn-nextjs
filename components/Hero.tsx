import heroImg from "@/assets/Sabzlearn.png";
import Image from "next/image";
import SecondaryBtn from "./common/SecondaryBtn";
import PrimaryBtn from "./common/PrimaryBtn";
import { MdPlayArrow } from "react-icons/md";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col items-start justify-center gap-8">
        <h3 className="md:text-4xl text-2xl font-medium">
          آکادمی آموزش برنامه نویسی سبزلرن
        </h3>
        <p className="text-lg">
          با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن
        </p>
        <div className="flex items-center justify-center gap-2">
          <SecondaryBtn>از این مسیرها شروع کن</SecondaryBtn>
          <PrimaryBtn>
            <MdPlayArrow size={20} />
          </PrimaryBtn>
          <span className="text-sm">دوره های رایگان</span>
        </div>
      </div>
      <Image src={heroImg} alt="heroImage" />
    </div>
  );
};

export default Hero;
