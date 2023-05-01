import FastMarquee from "react-fast-marquee";
import Image from "next/image";
function CategoriesSlideShow({ data }) {
  return (
    <FastMarquee
      speed={30}
      gradient={false}
    >
      <div className="flex w-full">
        {data.map((item, index) => (
          <div
            className=" flex flex-col items-center w-72 md:w-96"
            key={index}
          >
            <div className=" mb-4 flex justify-center h-[23rem] relative bg-slate-500 w-[16rem]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className=" object-cover"
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
