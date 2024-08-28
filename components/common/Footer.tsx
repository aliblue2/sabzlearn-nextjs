import logoIMg from "@/assets/logo.webp";
import logoText from "@/assets/svgexport-35.png";
import Image from "next/image";
import { PiMailbox, PiPhone, PiTelegramLogoDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-white w-full p-5">
      <div className="max-w-[1100px] overflow-hidden mx-auto flex flex-col items-start justify-start gap-5">
        <div className="flex items-center justify-center gap-5">
          <Image src={logoIMg} alt="sabzlearn" className="max-w-14" />
          <Image src={logoText} alt="sabzlearn" className="max-w-20" />
        </div>
        <div className="flex w-full flex-col md:flex-row md:items-center justify-start gap-3">
          <span className="flex items-center justify-start gap-2 text-sm">
            <PiPhone size={24} />
            02191030926
          </span>
          <span className="flex items-center justify-start gap-2 text-sm">
            <PiTelegramLogoDuotone size={24} />
            sabzlearn_support@
          </span>
          <span className="flex items-center justify-start gap-2 text-sm">
            <PiMailbox size={24} />
            info@sabzlearn.ir
          </span>
        </div>
        <main className="grid grid-cols-2 md:grid-cols-4 gap-5 my-1 border-t border-primaryColor p-5 rounded-t-3xl">
          <div className="col-span-2">
            <h4 className="text-xl font-medium text-start my-3">
              درباره سبزلرن
            </h4>
            <p className="text-sm">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و
              بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای
              برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت
              ببریم.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium">دوره های پرظرفدار</h4>
            <ul className="flex flex-col mt-3 items-start justify-start gap-3">
              <li className="text-sm text-gray-500">آموزش پایتون</li>
              <li className="text-sm text-gray-500">آموزش پایتون</li>
              <li className="text-sm text-gray-500">آموزش Html</li>
              <li className="text-sm text-gray-500">آموزش Css</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium">دسترسی سریع</h4>
            <ul className="flex flex-col mt-3 items-start justify-start gap-3">
              <li className="text-sm text-gray-500">قوانین و مقررات</li>
              <li className="text-sm text-gray-500">همه دوره ها</li>
              <li className="text-sm text-gray-500">ارسال تیکت</li>
            </ul>
          </div>
        </main>
        <p className="text-sm">
          کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
