import { Poppins } from "next/font/google";
import { Button } from "./lib/utils/Button";
import trade from "@/app/lib/data/home/trade.json";

import styles from "@/app/styles/Home.module.css";

import { Metadata } from "next";
import Works from "./lib/components/Home/Works";
import Hero from "./lib/components/Home/Hero";
import { poppins } from "./lib/utils/font";

export const metadata: Metadata = {
  title: "Gamer Swap",
};

export default function Home() {
  return (
    <main className="">
      <section>
        <p
          className={`text-center py-3 px-2 bg-[#2c6e493d] ${poppins.variable} font-sans text-sm tracking-wide opacity-80`}
        >
          <span className="mr-4">
            Register now - Get up to $100 worth of inplay credits (for
            registered users)
          </span>
          <Button>
            <span>Get Started</span>
          </Button>
        </p>
      </section>
      <section className="bg-[#FAFAFA] px-4 sm:px-12">
        <Hero />
      </section>
      <section className="bg-[#FAFAFA] px-4 sm:px-12">
        <div className=" mx-auto max-w-7xl pb-12 tracking-wide">
          <ul className="grid grid-cols-2 lg:grid-cols-4 ">
            {trade.map((details) => (
              <li
                className="${poppins.variable} text-center m-4 font-sans text-[1.5em] sm:text-[2.1em] flex-wrap font-semibold"
                key={details.id}
              >
                {details.amount}
                <span className="block font-normal text-xs sm:text-base">
                  {details.details}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.works}>
        <h3 className="text-center text-3xl text-primaryColor font-semibold py-10">
          How-it-works
        </h3>
        <Works />
      </section>
    </main>
  );
}
