import Link from "next/link";
import { useEffect, useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
function Navbar() {
  const { data, status } = useSession();
  const [profile, setProfile] = useState();
  const [userIsLogged, setUserIsLogged] = useState(false);
  const store = useSelector((state) => state);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data?.user?.id || data?.id) {
      if (store.carts.hasOwnProperty(data?.user?.id || data?.id)) {
        setCart(store.carts[data?.user?.id || data?.id]);
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

  useEffect(() => {
    if (data?.user) {
      setProfile(
        (
          data.user.firstName.charAt(0) + data.user.lastName.charAt(0)
        ).toUpperCase()
      );
    }
  }, [data?.user]);

  const loggedInUser = (
    <div className="flex items-center gap-3">
      {data?.image ? (
        <img
          src={data?.image}
          alt="user profile"
          referrerPolicy="no-referrer"
          className="w-[40px] h-[40px] rounded-full border-2 border-slate-300 p-[2px]"
        />
      ) : (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {profile}
          </span>
        </div>
      )}
      <span>
        {(data?.name && data?.name) ||
          (data?.user?.firstName &&
            data?.user?.firstName + " " + data?.user?.lastName)}
      </span>
      <div
        className="border border-slate-300 px-4 py-2 text-center cursor-pointer w-[140px]"
        onClick={
          status === "authenticated"
            ? signOut
            : () => {
                setUserIsLogged(false);
              }
        }
      >
        Sign out
      </div>
    </div>
  );

  const notLoggedInUser = (
    <>
      <a href="/auth/signin">Sign in</a>
      <a href="/register">Resgister</a>
    </>
  );

  return (
    <div className="flex px-6 py-4 justify-between items-center ">
      <span className="cursor-pointer">My closet</span>

      <div className="flex gap-5 ">
        {userIsLogged ? loggedInUser : notLoggedInUser}
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
