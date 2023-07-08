"use client";

import { useSession, signOut } from "next-auth/react";
import { BiSolidMoon } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

import styles from "@/app/styles/DesktopNav.module.css";
import Link from "next/link";

const DesktopNav = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navLink = [
    {
      id: "1",
      href: "/buy-games",
      name: "Buy Games",
    },
    {
      id: "2",
      href: "/trade-items",
      name: "Trade Items",
    },
    {
      id: "3",
      href: "/marketplace",
      name: "Marketplace",
    },
    {
      id: "4",
      href: "/exchange-zone",
      name: "Exchange Zone",
    },
  ];

  return (
    <nav
      className={`hidden xl:flex xl:justify-between xl:items-center px-8 py-4 ${styles.desktop_container}`}
    >
      <div className="flex items-center">
        <h1 className="uppercase text-3xl font-bold tracking-wider text-[#2c6e49]">
          <Link href="/">GAMER SWAP</Link>
        </h1>
        <ul>
          {navLink.map((details) => {
            const isActive = pathname.startsWith(details.href);

            return (
              <li key={details.href}>
                <Link
                  className={isActive ? "text-lightColor " : "text-black"}
                  href={details.href}
                >
                  {details.name}
                </Link>
              </li>
            );
          })}
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
                <BsPersonFill /> Logout
              </li>
            </>
          ) : (
            <>
              <Link href="/login">
                <li className="hover:text-lightColor hover:font-semibold">
                  Log In
                </li>
              </Link>
              <Link
                href="/register"
                className={styles.register}
              >
                <li className="bg-[#2c6e49]  hover:bg-lightColor hover:font-semibold rounded-md p-2 px-4 mx-2  text-white">
                  <BsPersonFill /> Register
                </li>
              </Link>
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
