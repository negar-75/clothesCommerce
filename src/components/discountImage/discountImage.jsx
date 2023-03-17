import Image from "next/image";

function DiscountImage() {
  return (
    <div className="bottom h-1/3 relative ">
      <Image
        src="/ribbon.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="discount"
      />

      <div
        className="absolute z-10 top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 flex flex-col 
        items-center justify-center "
      >
        <h2 className="mb-2 text-2xl font-medium tracking-wide text-center">
          15% OFF FULL-PRICED STYLES!
        </h2>
        <div className="mb-6 text-center">
          <p>Use Code 84778 | Exclusions Apply</p>
        </div>
        <button className="uppercase font-semibold tracking-wide text-xs text-slate-900 bg-slate-200 rounded-full  py-3 px-4 placeholder-shown: border border-slate-400 hover:border-black transition ease-linear duration-150">
          SHOP NOW | DETAILS
        </button>
      </div>
    </div>
  );
}

export default DiscountImage;
