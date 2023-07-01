import { Metadata } from "next";

import Form from "../lib/components/Register/Form";
import { poppins } from "../lib/utils/font";

export const metadata: Metadata = {
  title: "Gamer Swap | Register",
};

const Register = () => {
  return (
    <main className="mt-28">
      <section className="mx-auto max-w-sm">
        <h2
          className={`leading-[1.15] text-xl sm:text-2xl font-semibold font-sans px-2 ${poppins.variable}`}
        >
          Create Personal Account
        </h2>
        <Form />
      </section>
    </main>
  );
};

export default Register;
