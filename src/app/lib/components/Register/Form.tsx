"use client";

import styles from "@/app/styles/register/Form.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [message, setMessage] = useState<null | string>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = form;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (err: any) {
      setMessage(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={`${styles.form_container} mt-10 flex justify-center items-center flex-col`}
    >
      <fieldset className="w-full mx-4 flex justify-center items-center flex-col">
        <div className="w-full px-2">
          <label
            htmlFor="name"
            className="text-sm"
          >
            Full Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            required
            onChange={handleChange}
            autoComplete="false"
            value={form.name}
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
        </div>
        <div className="w-full px-2">
          <label
            htmlFor="email"
            className="text-sm"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            required
            onChange={handleChange}
            autoComplete="off"
            value={form.email}
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
        </div>

        <div className="w-full px-2">
          <label
            htmlFor="password"
            className="text-sm"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="new-password"
            id="password"
            onChange={handleChange}
            value={form.password}
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
        </div>
      </fieldset>
      <div className="flex flex-col w-full items-center px-2">
        <p className="w-full text-left">
          <Link
            href="/login"
            className="text-lightColor hover:text-primaryColor hover:underline"
          >
            {" "}
            Login with an existing account
          </Link>
        </p>
        {message && <p className="text-red-700 my-2 text-xl">{message}</p>}
        <button
          type="submit"
          className="text-center my-12 flex-1 w-full bg-[#2c6e49] hover:bg-lightColor hover:font-semibold rounded-md p-[1rem] px-4 mx-2  text-white cursor-pointer"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;
