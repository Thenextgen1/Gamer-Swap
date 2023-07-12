import ProductCard from "./ProductCard";

const StoreContainer = () => {
  return (
    <section
      className="

    my-6 grid lg:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-1 sm:gap-2 lg:gap-4
    "
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default StoreContainer;
