import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import s from "./headerContainer.module.css";
import HeroImage from "../heroImage/heroImage";
import DiscountImage from "../discountImage/discountImage";
function HeaderContainer({ data }) {
  return (
    <div className="flex flex-col   ">
      <div className="nav-container flex justify-between px-6  h-[5vh] ">
        <nav className="hidden lg:flex flex-row space-x-8 items-center ">
          {data.map((item) => (
            <a
              href={item.link}
              key={item.title}
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
            >
              {item.title}
            </a>
          ))}
          <div className="flex items-center">
            <Link
              href="/"
              className="cursor-pointer hover:text-gray-600 uppercase font-medium text-sm"
            >
              Search
            </Link>
          </div>
        </nav>
        <div className="relative  flex items-center">
          <Link
            href="/"
            className="cursor-pointer hover:text-gray-600 uppercase font-medium text-sm"
          >
            <LocalMallIcon />
          </Link>
          <span className={s.bagCount}>{2}</span>
        </div>
      </div>
      <div className="  h-[110vh] flex flex-col  px-5 gap-3  ">
        <HeroImage />
        <DiscountImage />
      </div>
    </div>
  );
}

export default HeaderContainer;
