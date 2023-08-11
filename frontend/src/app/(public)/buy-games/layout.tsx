import FilterContainer from "./FilterContainer";

export default function BuyGamesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div
    //  className="bg-[#F1F1F2]"
    >
      <FilterContainer />
      <main className="lg:ml-[17%] px-4 z-20 relative md:px-16 lg:px-0">
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </main>
    </div>
  );
}
