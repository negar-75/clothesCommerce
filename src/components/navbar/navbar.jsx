import Link from "next/link";
import { useEffect, useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import MobileSidebar from "../mobileSidebar/mobileSidebar";
import LoggedInUserProfile from "../loggedInUserProfile/loggedInUserProfile";
import Logo from "../logo/logo";
function Navbar() {
  const { data, status } = useSession();
  const [userIsLogged, setUserIsLogged] = useState(false);
  const store = useSelector((state) => state);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data?.user?._id || data?.id) {
      if (store.carts.hasOwnProperty(data?.user?._id || data?.id)) {
        setCart(store.carts[data?.user?._id || data?.id]);
      } else {
        setCart([]);
      }
    } else {
      setCart(store.items);
    }
  }, [data, store]);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  useEffect(() => {
    if (status === "authenticated") {
      setUserIsLogged(true);
    } else setUserIsLogged(false);
  }, [status]);

  const notLoggedInUser = (
    <div className=" flex gap-3 ml-auto mr-5 py-5 ">
      <a
        href="/auth/signin"
        className="uppercase hover:text-stone-500"
      >
        Sign in
      </a>
      <a
        href="/register"
        className="uppercase hover:text-stone-500"
      >
        Resgister
      </a>
    </div>
  );

  return (
    <div className=" flex items-center lg:px-9 lg:py-1 px-2 ">
      <span className="cursor-pointer hidden md:block">My closet</span>
      {/* <Logo /> */}
      {userIsLogged && <MobileSidebar setUserIsLogged={setUserIsLogged} />}

      {userIsLogged ? <LoggedInUserProfile /> : notLoggedInUser}
      <div className="relative flex items-center py-5  ">
        <Link
          href="/cart"
          className="cursor-pointer hover:text-gray-600 uppercase font-medium text-sm"
        >
          <LocalMallIcon />
        </Link>
        <span
          className=" bg-red-600 text-white
           h-4 w-4 absolute rounded-full right-3 top-5 flex
           items-center justify-center font-bold text-xs"
        >
          {getItemsCount()}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
