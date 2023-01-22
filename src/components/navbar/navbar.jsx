import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <div className="flex px-6 py-4 justify-between items-center ">
      <span className="cursor-pointer">My closet</span>

      <nav className="flex gap-5 ">
        <a href="#">Sign in</a>
        <a href="#">Resgister</a>

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
      </nav>
    </div>
  );
}

export default Navbar;
