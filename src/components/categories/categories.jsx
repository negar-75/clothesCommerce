import Image from "next/image";
import Marquee from "react-fast-marquee";

function Categories({ data }) {
  return (
    <div
      className="flex mx-6 mb-10  "
      style={{ minHeight: 350 }}
    >
      <Marquee>
        {data.map((item) => (
          <div className=" flex flex-col  w-1/3  text-center items-center">
            <div className=" h-4/5 mb-4  w-full flex justify-center">
              <img
                src={item.image}
                style={{ height: "350px", width: "90% ", objectFit: "cover" }}
              />
            </div>
            <button className="uppercase  font-semibold tracking-wide text-xs text-slate-900 bg-slate-200 rounded-full  py-3 px-4 placeholder-shown: border border-slate-400 hover:border-black transition ease-linear duration-150">
              {item.title}
            </button>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Categories;
