import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
function Navbar() {
  const { data, status } = useSession();
  console.log(data);
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  let authenticatedUser;
  if (status === "authenticated") {
    authenticatedUser = (
      <div className="flex items-center gap-3">
        <img
          src={data.user.image}
          alt="user profile"
          className="w-[40px] h-[40px] rounded-full border-2 border-slate-300 p-[2px]"
        />
        <span>{data.user.name}</span>
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
