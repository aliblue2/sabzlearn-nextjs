import GridCources from "@/components/cources/GridCources";
import { getAllCources } from "@/lib/api-db";

export default async function CourcesPage() {
  const cources = await getAllCources();
  return (
    <>
      <h4 className="text-xl font-medium">
        همه دوره های سبز لرن
      </h4>
      <GridCources cources={cources} />
    </>
  );
}
