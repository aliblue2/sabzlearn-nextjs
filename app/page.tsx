import GridCources from "@/components/cources/GridCources";
import Hero from "@/components/Hero";
import { getAllCources } from "@/lib/api-db";
import Link from "next/link";

export default async function Home() {
  const cources = await getAllCources();
  return (
    <>
      <Hero />
      <div className="flex items-center mt-10 justify-between">
        <h4 className="text-lg font-medium">
          دوره های پیشنهادی
        </h4>
        <Link href={'/cources'} >
        مشاهده همه</Link>
      </div>
      <GridCources cources={cources} />
    </>
  );
}
