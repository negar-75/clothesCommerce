import Link from "next/link";
import HeroImage from "../heroImage/heroImage";
import DiscountImage from "../discountImage/discountImage";
function HeaderContainer({ data }) {
  return (
    <div className="flex flex-col  ">
      <div className="lg:flex justify-between px-6 h-[5vh]  hidden">
        <nav className=" flex flex-row space-x-8 items-center">
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
      </div>
      <div className="  h-[110vh] flex flex-col gap-3 md:mx-5  ">
        <HeroImage />
        <DiscountImage />
      </div>
    </div>
  );
}

export default HeaderContainer;
