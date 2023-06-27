import { Button } from "@/app/lib/utils/Button";
import { poppins } from "@/app/page";
import styles from "@/app/styles/Form.module.css";

const Form = () => {
  return (
    <form
      className={`${styles.form_container} mt-10 flex justify-center items-center flex-col`}
    >
      <div className="flex flex-col justify-center items-center mx-4"></div>
      <h2
        className={`leading-[1.15] text-xl sm:text-2xl font-semibold font-sans mx-4 ${poppins.variable}`}
      >
        Create Personal Account
      </h2>
      <fieldset className="w-full mx-4 flex justify-center items-center flex-col">
        <div>
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
            className="p-3 border-solid border-[1px] border-[#EAECEF]"
          />
        </div>

        <div>
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
            id="password"
            className="p-3 border-solid border-[1px] border-[#EAECEF]"
          />
        </div>
      </fieldset>
      <div className="flex flex-col justify-center items-center mx-4">
        <p className=" text-[#707a8a] text-sm flex-1">
          By creating an account, You agree to Gamer Swap&lsquo;s{" "}
          <span className="underline text-black font-medium">
            Terms of <br className="hidden sm:block" /> Service
          </span>{" "}
          and{" "}
          <span className="underline text-black font-medium">
            Privacy Policy
          </span>
        </p>
        <p className="text-center my-12 flex-1 w-full bg-[#2c6e49] hover:bg-lightColor hover:font-semibold rounded-md p-[1rem] px-4 mx-2  text-white cursor-pointer">
          <button type="submit">Next</button>
        </p>
      </div>
    </form>
  );
};

export default Form;
