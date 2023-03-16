import Link from "next/link";
import { useEffect } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
function Navbar() {
  const { data, status } = useSession();
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  let profile;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userName = localStorage.getItem("user").split(" ");
      profile = (userName[0].charAt(0) + userName[1].charAt(0)).toUpperCase();
    }
  }, [localStorage.getItem("user")]);

  let authenticatedUser;
  if (status === "authenticated" || localStorage.getItem("user")) {
    authenticatedUser = (
      <div className="flex items-center gap-3">
        {data ? (
          <img
            src={data.user.image}
            alt="user profile"
            className="w-[40px] h-[40px] rounded-full border-2 border-slate-300 p-[2px]"
          />
        ) : (
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">
              {profile}
            </span>
          </div>
        )}
        <span>{(data && data.user.name) || localStorage.getItem("user")}</span>
        <div
          className="border border-slate-300 px-4 py-2 text-center cursor-pointer w-[140px]"
          onClick={signOut}
        >
          Sign out
        </div>
      </div>
    );
  } else {
    authenticatedUser = (
      <>
        <a href="/signIn">Sign in</a>
        <a href="/register">Resgister</a>
      </>
    );
  }

  return (
    <div className="flex px-6 py-4 justify-between items-center ">
      <span className="cursor-pointer">My closet</span>

      <div className="flex gap-5 ">
        {authenticatedUser}
        <div className="relative  md:flex items-center ">
          <Link
            href="/cart"
            className="cursor-pointer hover:text-gray-600 uppercase font-medium text-sm"
          >
            <LocalMallIcon />
          </Link>
          <span
            className=" bg-red-600 text-white
           h-4 w-4 absolute rounded-full right-3 top-3 flex
           items-center justify-center font-bold text-xs"
          >
            {getItemsCount()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
