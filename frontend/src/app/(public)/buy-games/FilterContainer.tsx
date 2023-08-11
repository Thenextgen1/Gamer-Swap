import React from "react";
import Category from "./common/Category";

const FilterContainer = () => {
  return (
    <aside className="mt-4 py-16 pl-14 pr-6 hidden lg:block absolute inset-0">
      <div>
        <h4>CATEGORY</h4>
        <Category />
      </div>
    </aside>
  );
};

export default FilterContainer;
