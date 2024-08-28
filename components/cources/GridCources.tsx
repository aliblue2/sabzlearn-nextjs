import CardCource from "./CardCource";

const GridCources = ({ cources }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5">
      {cources.map((cource) => {
        return <CardCource cource={cource} key={cource.id} />;
      })}
    </div>
  );
};

export default GridCources;
