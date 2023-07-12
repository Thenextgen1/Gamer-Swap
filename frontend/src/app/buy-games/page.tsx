import { Metadata } from "next";
import StoreContainer from "./StoreContainer";

export const metadata: Metadata = {
  title: "Buy Games",
};

const BuyGames = () => {
  return (
    <section className="py-6 max-w-7xl mx-auto px-2">
      <h2 className=" md:text-4xl text-xl py-6">Buy Games</h2>
      <p className="md:text-lg text-sm font-light text-[rgba(18_18_18)] opacity-75">
        Before making purchases, please read the product description. Price and
        other details may vary based on product size and color.
      </p>
      <StoreContainer />
    </section>
  );
};

export default BuyGames;
