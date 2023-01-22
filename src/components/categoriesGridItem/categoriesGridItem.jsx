import Image from "next/image";
import wordCounter from "../../../functions/wordCounter";

function CategoriesGridItem({ image, title, desc, href }) {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <div className="mb-2 w-full h-[23rem] flex md:h-[26rem] md:w-[22rem] justify-center">
        <img
          src={image}
          alt={title}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>

      <h3>{title}</h3>
      <div className="mb-2 px-4 text-center  ">{wordCounter(desc)}</div>
      <a
        className="mt-4 uppercase font-semibold tracking-wide text-xs
         text-slate-900 bg-white rounded-full px-4 py-3 border
         border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer"
        href={`/store/${href}`}
      >
        Shop Now
      </a>
    </div>
  );
}

export default CategoriesGridItem;
