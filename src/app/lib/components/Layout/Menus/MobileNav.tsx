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
          Gamer Swap
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
            className={`px-4 bottom-0 top-0 right-0 w-[98%] z-[90] pt-24 fixed h-screen  bg-white ${styles.nav_container}`}
          >
            {session ? (
              <>
                <p>Signed in as {session.user?.email}</p>
                <p
                  onClick={() => signOut()}
                  className="bg-[#2c6e49] rounded-md p-2 px-4 mx-2 text-white"
                >
                  <BsPersonFill /> Sign Out
                </p>
              </>
            ) : (
              <>
                <p
                  onClick={() => signIn()}
                  className="hover:text-lightColor my-4 hover:font-semibold text-center"
                >
                  Log In
                </p>
                <p className="bg-[#2c6e49] text-center  hover:bg-lightColor hover:font-semibold rounded-md p-2 px-4  text-white">
                  <BsPersonFill /> <Link href="/register">Register</Link>
                </p>
              </>
            )}
            <ul className={`${styles.navlink_container}`}>
              <li>Buy Games</li>
              <li>Trade Items</li>
              <li>Earn</li>
              <li>Feed</li>
              <li>AR/VR Zone</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
