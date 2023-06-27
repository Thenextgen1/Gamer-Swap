import Form from "../lib/components/Login/Form";
import { poppins } from "@/app/page";

export default function Login() {
  return (
    <main className="max-w-sm mx-auto">
      <h2
        className={`leading-[1.15] mt-12 mx-auto  pl-2 sm:pl-0 text-xl my-6 sm:text-2xl font-semibold font-sans ${poppins.variable}`}
      >
        Log In
      </h2>
      <section>
        <Form />
      </section>
    </main>
  );
}
