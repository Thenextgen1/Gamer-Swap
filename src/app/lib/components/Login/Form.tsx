"use client";
import styles from "@/app/styles/login/Form.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  return (
    <form
      className={`${styles.form_container} flex justify-center items-center flex-col`}
    >
      <fieldset className="w-full mx-4 flex justify-center items-center flex-col">
        <label
          className="w-full pl-2 sm:pl-0 "
          htmlFor="email"
        >
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          required
          className=" w-[95%]  sm:pl-0 mx-4 sm:mx-0 border-solid border-[1px] border-[#EAECEF]"
        />
      </fieldset>
      <div className={`flex flex-col justify-center w-full items-center mx-4`}>
        <p className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="text-center flex-1   mt-6 bg-[#2c6e49] hover:bg-lightColor hover:font-semibold rounded-md p-[1rem] px-4 mx-2  text-white cursor-pointer"
          >
            Next
          </button>
        </p>
        <p
          className={`py-6  text-[#707a8a] text-center ${styles.login_continue}`}
        >
          <span className="mr-1 "> Or</span>
        </p>
      </div>
      <div className="flex w-full justify-center px-2 text-lg items-center">
        <p
          onClick={() => signIn("google")}
          className=" flex items-center justify-between pl-4 flex-1   cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center"
        >
          <FcGoogle
            size={20}
            className="align-text-top"
          />
          <span> Continue with Google</span>
          <span></span>
        </p>
      </div>
      <div className="flex w-full justify-center px-2 text-lg items-center">
        <p
          onClick={() => signIn("facebook")}
          className=" flex items-center justify-between pl-4 flex-1   cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center"
        >
          <FaFacebookSquare
            size={20}
            className="align-middle text-blue-700"
          />
          <span> Continue with Facebook</span>
          <span></span>
        </p>
      </div>

      <div className="py-4 px-2 w-full">
        <p>
          <Link
            href="/register"
            className="text-lightColor hover:text-primaryColor hover:underline"
          >
            {" "}
            Create a GamerSwap Account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Form;
