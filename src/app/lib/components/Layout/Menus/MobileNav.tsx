"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { BsPersonFill } from "react-icons/bs";
import styles from "@/app/styles/MobileNav.module.css";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav>
      <div className="xl:hidden relative flex px-1 justify-between items-center pl-2 sm:px-16 pt-4 pb-2">
        <h1 className="uppercase text-xl font-bold tracking-wider text-[#2c6e49]">
          <Link href="/">GAMER SWAP</Link>
        </h1>
        <div className="flex items-center z-[100]">
          <Hamburger
            size={25}
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, x: 300 }}
            onClick={() => {
              setOpen(false);
            }}
            className={`px-4 bottom-0 top-0 right-0 w-[98%] z-[90] pt-24 fixed h-screen  bg-white ${styles.nav_container}`}
          >
            {session ? (
              <>
                <p>Signed in as {session.user?.email}</p>
                <p
                  onClick={() => signOut()}
                  className="bg-[#2c6e49] rounded-md p-2 px-4 mx-2 text-white"
                >
                  <BsPersonFill /> Logout
                </p>
              </>
            ) : (
              <>
                <Link href="/login">
                  <p className="hover:text-lightColor my-4 hover:font-semibold text-center">
                    Log In
                  </p>
                </Link>
                <Link href="/register">
                  <p className="bg-[#2c6e49] text-center  hover:bg-lightColor hover:font-semibold rounded-md p-2 px-4  text-white">
                    <BsPersonFill /> Register
                  </p>
                </Link>
              </>
            )}
            <ul className={`${styles.navlink_container}`}>
              <li>
                <Link href="/buy-games"> Buy Games</Link>
              </li>
              <li>
                <Link href="/trade-items"> Trade Items</Link>
              </li>
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/exchange-zone">Exchange Zone</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
