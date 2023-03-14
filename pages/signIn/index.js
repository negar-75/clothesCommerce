import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

function SignInPage() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="bg-amber-50 h-full flex flex-col items-center py-10">
      <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-10">
        <p className="text-xs">
          <Link href="/">
            <span className="text-gray-500 ">Home/ </span>
          </Link>
          Sign in
        </p>
      </div>
      <h2 className="mb-10">Sign in</h2>
      <form className="items-center  flex flex-col gap-6 shadow-md bg-white py-10 px-8 lg:px-20 rounded-lg mx-3">
        <div className="flex gap-2 flex-col lg:w-[300px] w-[95%]">
          <label>User name</label>
          <input type="text" />
        </div>
        <div className="flex gap-2 flex-col lg:w-[300px] w-[95%]">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="border-2 w-[200px] h-[40px] uppercase">
          Sign in
        </button>
      </form>
      <div
        className="items-center mt-10 flex flex-col gap-4 pb-10
      "
      >
        <h3>Or Sign in with:</h3>
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

export default SignInPage;
