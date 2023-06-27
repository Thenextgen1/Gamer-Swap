import { Metadata } from "next";
import Form from "../lib/components/login/Form";

export const metadata: Metadata = {
  title: "Gamer Swap",
};

const Register = () => {
  return (
    <main className="mt-28">
      <section className="mx-auto max-w-7xl">
        <Form />
      </section>
    </main>
  );
};

export default Register;
