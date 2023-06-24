"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="xl:hidden z-50 relative flex px-1 justify-between items-center pl-2 sm:px-16 pt-4 pb-2">
        <h1 className="uppercase text-xl font-bold tracking-wider text-[#2c6e49]">
          Gamer Swap
        </h1>
        <div className="flex items-center">
          <Hamburger
            size={25}
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
