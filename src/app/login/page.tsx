import { Metadata } from "next";
import Form from "../lib/components/Login/Form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="max-w-sm mx-auto">
      <section>
        <Form />
      </section>
    </main>
  );
}
