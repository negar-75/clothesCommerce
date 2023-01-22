import Image from "next/image";
import FastMarquee from "react-fast-marquee";

function CategoriesSlideShow({ data }) {
  return (
    <FastMarquee
      speed={30}
      gradient={false}
    >
      <div className="flex  w-full">
        {data.map((item) => (
          <div className=" flex flex-col items-center w-72 md:w-96">
            <div className=" mb-4 flex justify-center h-[23rem]">
              <img
                src={item.image}
                style={{ objectFit: "cover", width: "90%" }}
              />
            </div>
            <button className="uppercase  font-semibold tracking-wide text-xs text-slate-900 bg-slate-200 rounded-full  py-3 px-4 placeholder-shown: border border-slate-400 hover:border-black transition ease-linear duration-150">
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </FastMarquee>
  );
}

export default CategoriesSlideShow;
