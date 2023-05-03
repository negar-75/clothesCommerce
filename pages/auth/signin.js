import { signIn, getSession } from "next-auth/react";
import { getCsrfToken, getProviders } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

function SignInPage(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [providersList, setProvidersList] = useState([]);
  useEffect(() => {
    const newArr = Object.keys(props.providers).map((key) => {
      return {
        id: key,
        name: props.providers[key].name,
        type: props.providers[key].type,
        signinUrl: props.providers[key].signinUrl,
        callbackUrl: props.providers[key].callbackUrl,
        image: `/${key}_icon.png`,
      };
    });
    setProvidersList(newArr);
  }, []);
  return (
    <div
      className=" h-full flex flex-col py-10  
     "
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/bc-image.jpg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-10">
        <p className="text-xs">
          <Link href="/">
            <span className="text-gray-500 ">Home/ </span>
          </Link>
          Sign in
        </p>
      </div>
      <h2 className="mb-10 md:text-center ml-8">Sign in</h2>
      <div className=" flex flex-col items-center justify-center">
        <form
          className="items-center flex flex-col gap-6 bg-white py-10 px-8 lg:px-20 rounded-lg lg:w-[30%] w-[90%] "
          action=""
        >
          <input
            name="csrfToken"
            type="hidden"
            defaultValue={props.csrfToken}
          />
          <div className="flex gap-2 flex-col lg:w-[300px] w-[95%]">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => (emailRef.current = e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col lg:w-[300px] w-[95%]">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => (passwordRef.current = e.target.value)}
            />
          </div>
          <button
            className="border-2 w-[200px] h-[40px] uppercase"
            onClick={(e) => {
              console.log(process.env.NEXTAUTH_URL);
              e.preventDefault();
              signIn("credentials", {
                email: emailRef.current,
                password: passwordRef.current,
                // callbackUrl: `,
              });
            }}
          >
            Sign in
          </button>
        </form>
      </div>

      <div
        className="items-center mt-10 flex flex-col gap-4 pb-10 
      "
      >
        <div className="font-semibold mb-8 relative flex items-center w-[80%]">
          <div className="flex-grow h-[1px] bg-black "></div>
          <h3 className="flex-shrink text-2xl  px-4 inline">OR</h3>
          <div className="flex-grow h-[1px] bg-black "></div>
        </div>
        {providersList &&
          providersList.map((provider) => {
            if (provider.id !== "credentials") {
              return (
                <button
                  key={provider.id}
                  className="flex items-center border-2 w-[200px] justify-center gap-2 h-[40px] border-black"
                  onClick={() =>
                    signIn(`${provider.id}`, {
                      callbackUrl: `${window.location.origin}/`,
                    })
                  }
                >
                  {provider.image && (
                    <img
                      src={provider.image}
                      className="w-[25px] h-[25px]"
                    />
                  )}{" "}
                  <span>{provider.name}</span>
                </button>
              );
            }
          })}
      </div>
    </div>
  );
}

export default SignInPage;
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const providers = await getProviders(ctx);
  console.log(providers);
  if (!session && !providers) {
    return {
      props: {},
    };
  }

  return {
    props: {
      session,
      providers,
      csrfToken: await getCsrfToken(ctx),
    },
  };
}
