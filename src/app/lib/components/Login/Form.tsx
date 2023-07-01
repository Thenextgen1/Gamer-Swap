"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "@/app/styles/login/Form.module.css";
import Link from "next/link";
import GoogleButton from "../Buttons/GoogleButton";
import FacebookButton from "../Buttons/FacebookButton";
import { signIn } from "next-auth/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { poppins } from "../../utils/font";

const Form = () => {
  const params = useSearchParams();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form_container} flex justify-center items-center flex-col`}
    >
      <h2
        className={`leading-[1.15] mt-12 mx-auto w-full  pl-2 sm:pl-0 text-xl my-6 sm:text-2xl font-semibold font-sans ${poppins.variable}`}
      >
        Log In
      </h2>

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
          onChange={handleChange}
          value={form.email}
          className=" w-[95%]  sm:pl-0 mx-4 sm:mx-0 border-solid border-[1px] border-[#EAECEF]"
        />
      </fieldset>
      <fieldset className="w-full mx-4 mt-12 flex justify-center items-center flex-col">
        <label
          className="w-full pl-2 sm:pl-0 "
          htmlFor="password"
        >
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          required
          className=" w-[95%]  sm:pl-0 mx-4 sm:mx-0 border-solid border-[1px] border-[#EAECEF]"
        />
      </fieldset>
      <div className={`flex flex-col justify-center w-full items-center mx-4`}>
        <button
          type="submit"
          className="w-full flex justify-center items-center"
        >
          <span className="text-center flex-1   mt-6 bg-[#2c6e49] hover:bg-lightColor hover:font-semibold rounded-md p-[1rem] px-4 mx-2  text-white cursor-pointer">
            Log in
          </span>
        </button>
        <p
          className={`py-6  text-[#707a8a] text-center ${styles.login_continue}`}
        >
          <span className="mr-1 "> Or</span>
        </p>
      </div>
      <div className="flex w-full justify-center px-2 text-lg items-center">
        <GoogleButton />
      </div>
      <div className="flex w-full justify-center px-2 text-lg items-center">
        <FacebookButton />
      </div>

      {error && (
        <p className="text-red-700 w-full text-left uppercase tracking-wider text-sm font-semibold my-2 ">
          {error}
        </p>
      )}

      <div className="py-4 px-2 w-full">
        <p>
          <Link
            href="/register"
            className="text-lightColor hover:text-primaryColor hover:underline"
          >
            {" "}
            Create a GamerSwap Account
            <BsArrowRightCircleFill />
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Form;
