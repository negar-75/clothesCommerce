import CountrySelection from "../../src/components/countrySelection/countrySelection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

function Register() {
  const { data, status } = useSession();

  return (
    <div className="register px-4 py-8">
      <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-10">
        <p className="text-xs">
          <Link href="/">
            <span className="text-gray-500 ">Home/ </span>
          </Link>
          Register
        </p>
      </div>
      <h3 className="text-center mb-10">Create Account</h3>
      <form className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-4 lg:mx-20 ">
        <div className="flex flex-col gap-2 ">
          <label>First Name ⁕</label>
          <input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Last Name ⁕</label>
          <input type="text" />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <label>Email ⁕</label>
          <input type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password ⁕</label>
          <input type="password" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirm password ⁕</label>
          <input type="password" />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-2">
          <label>Country ⁕</label>
          <CountrySelection />
        </div>
        <div className="flex flex-col gap-2">
          <label>Adress ⁕</label>
          <input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Zip ⁕</label>
          <input type="number" />
        </div>
      </form>
      <div className="items-center mt-10 flex flex-col gap-4">
        <h3>Or Register with:</h3>
        <button
          className="flex items-center border-2 w-[200px] justify-center gap-2 h-[40px]"
          onClick={() => signIn("google")}
        >
          <img
            src="/google_icon.png"
            className="w-[40px] h-[40px]"
          />

          <span>Google</span>
        </button>
        <button className="flex items-center border-2 w-[200px] justify-center gap-2 h-[40px]">
          <img
            src="/facebook_icon.png"
            className="w-[30px] h-[30px] ml-2"
          />
          <span className="ml-1">Facebook</span>
        </button>
        <button className="flex items-center w-[200px] justify-center gap-2 h-[40px] border-2">
          <img
            src="/apple_icon.png"
            className="w-[30px] h-[30px]"
          />
          <span>Apple</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
