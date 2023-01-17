import Image from "next/image";
import wordCounter from "../../../functions/wordCounter";

function ClothesGridItem({ image, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center mb-10 ">
      <div className="mb-2 bg-yellow-300 w-3/4 h-[35rem] relative md:h-[28rem]">
        image
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2>{title}</h2>
      <div className="mb-2 px-4 text-center  ">{wordCounter(desc)}</div>
      <a
        className="mt-4 uppercase font-semibold tracking-wide text-xs
         text-slate-900 bg-white rounded-full px-4 py-3 border
         border-slate-400 hover:border-black transition ease-linear duration-150"
        href="/"
      >
        Shop Now
      </a>
    </div>
  );
}

export default ClothesGridItem;
