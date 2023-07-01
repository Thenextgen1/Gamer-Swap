"use client";

import { BsArrowRightCircleFill, BsPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import styles from "@/app/styles/Home.module.css";

import { signIn } from "next-auth/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`lg:py-20 bg-[#FAFAFA] pt-12  items-start max-w-7xl justify-center lg:justify-between mx-auto flex-col lg:flex-row flex ${styles.hero}`}
    >
      <div className="flex-1 lg:text-left text-left lg:mr-12">
        <div>
          <h2 className="lg:text-4xl xl:text-5xl leading-[1.15] text-3xl font-semibold">
            Unlock the Power of Gaming Credits Exchange on Gamer Swap
          </h2>
          <p className="lg:text-xl text-sm mt-12 mb-8">
            Exchange Gaming Items for free <BsArrowRightCircleFill />{" "}
          </p>
          <Link href="/register">
            <p
              className={`${styles.hero_signup} cursor-pointer hover:bg-lightColor hover:font-semibold`}
            >
              <span className="text-center block  lg:px-12  py-2 tracking-wider lg:text-lg">
                {" "}
                <BsPersonFill size={22} />
                Sign up with Email
              </span>
            </p>
          </Link>
          <p
            className={`py-6 mt-6 text-[#707a8a] text-center ${styles.hero_continue}`}
          >
            <span className="mr-1 "> Or continue with</span>
          </p>
          <div className="flex  text-lg items-center">
            <p
              onClick={() => signIn()}
              className=" flex-1 mr-2 cursor-pointer hover:bg-[#F5F5F5] hover:font-medium w-full bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center"
            >
              <FcGoogle
                size={20}
                className="align-text-top mr-2"
              />
              <span>Google</span>
            </p>
            <p
              onClick={() => signIn()}
              className="  hover:bg-[#F5F5F5] hover:font-medium cursor-pointer py-2 sm:py-4  ml-2 w-full flex-1 bg-[#EAECEF] my-4 text-center sm:ml-6 rounded-lg"
            >
              <FaFacebookSquare
                size={20}
                className="align-middle mr-2 text-blue-700"
              />
              <span>Facebook</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full hidden lg:block  lg:my-0 my-12 lg:ml-12">
        <Image
          src="/images/hero.webp"
          alt="hero"
          width={500}
          height={500}
          className="rounded-lg object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
