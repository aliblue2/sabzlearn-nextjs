import ModalWraper from "@/components/common/ModalWraper";
import CourceDetailCompo from "@/components/cources/CourceDetailCompo";
import { deleteCourceDb } from "@/lib/actions";
import { getCource } from "@/lib/api-db";
import notfoundImg from "@/assets/404.png";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata({ params }) {
  const slug = params.slug;
  return {
    title: `دوره آموزشی جامع و پروژه محور  ${slug} در سبزلرن`,
    description: `دوره آموزشی جامع و پروژه محور  ${slug} در سبزلرن کاملا ضمانت بی قید و شرط بارگردانی مبلغ در صورت نارضایتی را دارا هستند`,
  };
}

export default async function CourceDetail({ params }) {
  const slug = params.slug;
  const cource = await getCource(slug);
  const deleteCourceHandler = async () => {
    "use server";
    deleteCourceDb(slug);
  };
  if(cource){
  return (
    <>
      <CourceDetailCompo cource={cource} />
      <ModalWraper deleteCource={deleteCourceHandler} />
    </>
  );}
  else{
    return <>
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
    </>
  }

}
