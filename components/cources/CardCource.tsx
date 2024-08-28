import Link from "next/link";
import { MdKeyboardArrowLeft, MdPerson } from "react-icons/md";

const CardCource = ({ cource }) => {
  return (
    <Link
      href={`/cources/${cource.slug}`}
      scroll={true}
      className="bg-white shadow-md rounded-xl overflow-hidden h-full"
    >
      <img
        src={cource.image}
        alt={cource.title}
        className="h-40 object-cover w-full object-center"
      />
      <div className="flex relative px-3 py-2 flex-col items-start justify-start gap-3">
        <h4 className="font-medium text-sm md:text-base line-clamp-1">
          {cource.title}
        </h4>
        <p className="text-xs md:text-sm text-gray-700 line-clamp-3">
          {cource.description}
        </p>
        <div className="w-full flex items-center justify-between">
          <span className="flex text-xs md:text-sm items-center justify-start gap-1">
            <MdPerson size={18} />
            {cource.teacher}
          </span>
          <span className="text-xs md:text-sm">{cource.cource_time}</span>
        </div>
        <div className="h-[1px] bg-gray-200 w-full"></div>
        <div className="flex items-center justify-between w-full">
          <h4 className="text-accentColor text-lg font-medium text-center">
            {cource.price.toLocaleString("fa-IR") + " تومان"}
          </h4>
          <span className="text-primaryColor flex items-center justify-center gap-2">
            <MdKeyboardArrowLeft size={24} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardCource;
