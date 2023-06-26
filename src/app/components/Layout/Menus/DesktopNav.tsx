"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { BiSolidMoon } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import styles from "@/app/styles/DesktopNav.module.css";

const DesktopNav = () => {
  const { data: session } = useSession();

  return (
    <nav
      className={`hidden xl:flex xl:justify-between xl:items-center px-8 py-4 ${styles.desktop_container}`}
    >
      <div className="flex items-center">
        <h1 className="uppercase text-3xl font-bold tracking-wider text-[#2c6e49]">
          Gamer Swap
        </h1>
        <ul>
          <li>Buy Games</li>
          <li>Trade Items</li>
          <li>Earn</li>
          <li>Feed</li>
          <li>AR/VR Zone</li>
        </ul>
      </div>
      <div>
        <ul className="cursor-pointer">
          <li>
            <FaSearch className="hover:text-lightColor" />
          </li>
          {session ? (
            <>
              <li>Signed in as {session.user?.email}</li>
              <li
                onClick={() => signOut()}
                className="bg-[#2c6e49] rounded-md p-2 px-4 mx-2 text-white"
              >
                <BsPersonFill /> Sign Out
              </li>
            </>
          ) : (
            <>
              <li
                onClick={() => signIn()}
                className="hover:text-lightColor hover:font-semibold"
              >
                Log In
              </li>
              <li className="bg-[#2c6e49]  hover:bg-lightColor hover:font-semibold rounded-md p-2 px-4 mx-2  text-white">
                <BsPersonFill /> Register
              </li>
            </>
          )}

          <li>
            <BiSolidMoon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
