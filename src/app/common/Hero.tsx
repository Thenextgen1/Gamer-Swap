import { BsApple, BsArrowRightCircleFill, BsPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import styles from "@/app/styles/Home.module.css";
import { Button } from "../utils/Button";

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
          <p className={styles.hero_signup}>
            <span className="text-center block lg:px-12  py-2 tracking-wider lg:text-lg">
              {" "}
              <BsPersonFill size={22} />
              Sign up with Email or Phone
            </span>
          </p>
          <p
            className={`py-6 mt-6 text-[#707a8a] sm:text-center lg:text-left ${styles.hero_continue}`}
          >
            <span className="mr-1"> Or continue with</span>
          </p>
          <div className="flex  text-lg items-center">
            <p className=" flex-1 mr-2  w-full bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center">
              <FcGoogle
                size={20}
                className="align-text-top mr-2"
              />
              <span>Google</span>
            </p>
            <p className=" py-2 sm:py-4  ml-2 w-full flex-1 bg-[#EAECEF] my-4 text-center sm:ml-6 rounded-lg">
              <BsApple
                size={20}
                className="align-baseline mr-2"
              />
              <span className="">Apple</span>
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
