import CountrySelection from "../../src/components/countrySelection/countrySelection";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { signIn, getProviders } from "next-auth/react";
import PopUp from "../../src/components/popUp/popUp";

function Register({ providers }) {
  const [providersList, setProvidersList] = useState([]);
  const [user, setUser] = useState({});
  const passRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const newArr = Object.keys(providers).map((key) => {
      return {
        id: key,
        name: providers[key].name,
        type: providers[key].type,
        signinUrl: providers[key].signinUrl,
        callbackUrl: providers[key].callbackUrl,
        image: `/${key}_icon.png`,
      };
    });
    setProvidersList(newArr);
  }, []);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const validatePassword = (event) => {
    const password = passRef.current.value;
    if (event.target.value !== password) {
      setShowErrorMessage(true);
    } else setShowErrorMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/api/user`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsModalOpen(true);
      })
      .catch((err) => console.log(err));
  };

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
      <form
        className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-4 lg:mx-20 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="firstName">First Name ⁕</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            onChange={handleChange}
            maxLength={10}
            className="peer valid:border-green-600 invalid:border-red-500"
          />
          <span className="peer-invalid:visible text-red-500 peer-valid:hidden">
            Enter your first name
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name ⁕</label>
          <input
            type="text"
            id="lastName"
            required
            name="lastName"
            onChange={handleChange}
            maxLength={15}
            className="peer valid:border-green-600 invalid:border-red-500"
          />
          <span className="peer-invalid:visible text-red-500 peer-valid:hidden">
            Enter your last name
          </span>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <label>Email ⁕</label>
          <input
            type="text"
            name="email"
            required
            autoComplete="username"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
            className="peer valid:border-green-600 invalid:border-red-500"
          />
          <span className="peer-invalid:visible text-red-500 peer-valid:hidden">
            Enter valid email adress
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label>Password ⁕</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="new-password"
            onChange={handleChange}
            pattern=".{6,12}"
            className="peer valid:border-green-600 invalid:border-red-500"
            ref={passRef}
          />
          <span className="peer-invalid:visible peer-valid:hidden text-red-500 ">
            Your password must be between 6 to 12 digits
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirm password ⁕</label>
          <input
            type="password"
            name="repeatPassword"
            autoComplete="new-password"
            required
            onKeyUp={validatePassword}
            className="invalid:border-red-500 valid:border-green-600"
          />
          {showErrorMessage && (
            <span className="text-red-500">Your password does not match</span>
          )}
        </div>
        <div className="lg:col-span-2 flex flex-col gap-2">
          <label>Country ⁕</label>
          <CountrySelection
            name="country"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Adress ⁕</label>
          <input
            type="text"
            name="adress"
            required
            onChange={handleChange}
            className="invalid:border-red-500 valid:border-green-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Zip ⁕</label>
          <input
            type="number"
            name="zip"
            required
            onChange={handleChange}
            className="invalid:border-red-500 valid:border-green-600"
          />
        </div>
        <div className=" lg:col-span-2 text-center py-5">
          <button className="border-2 w-[200px] h-[40px] uppercase border-black">
            submit
          </button>
        </div>
      </form>
      <div className="items-center mt-10 flex flex-col gap-4">
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
      <PopUp
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalContent="Your account has been created"
      />
    </div>
  );
}

export default Register;

export async function getServerSideProps(context) {
  const providers = await getProviders(context);
  console.log(providers);
  return {
    props: { providers },
  };
}
