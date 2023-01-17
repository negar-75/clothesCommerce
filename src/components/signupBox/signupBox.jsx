function SignupBox() {
  return (
    <div className="mt-16 md:mt-16 xl:mt-0 mr-10">
      <h3 className="text-sm font-medium text-gray-900">
        Sign up for our newsletter
      </h3>
      <p className="mt-6 text-sm text-gray-500">
        The latest deals and savings, sent to your inbox weekly.
      </p>
      <form className="mt-2 flex sm:max-w-md">
        <label
          htmlFor="email-address"
          className="sr-only"
        >
          Email address
        </label>
        <input
          id="email-address"
          type="text"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 shadow-sm py-2 px-4 text-base text-slate-500 placeholder-gray-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
        <div className=" flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-black border border-transparent shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupBox;
