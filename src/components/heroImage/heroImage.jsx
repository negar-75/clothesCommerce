import Image from "next/image";

function HeroImage() {
  return (
    <div className="top h-4/5 relative">
      <Image
        src="/woman.jpg"
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute z-10 bg-white opacity-90 top-1/2 left-1/2 
         transform -translate-x-1/2 -translate-y-1/2 flex flex-col 
         items-center justify-center py-5 px-7"
      >
        <h2 className="text-2xl font-bold px-12 mb-2 text-center">
          SUIT YOURSELF
        </h2>
        <div className="mb-6">
          <p className="text-center">
            New swim is in! Our best-selling quilted jacket chases away<br></br>
            the chillin new colors and prints, with <br></br>contrasting
            details.
          </p>
        </div>

        <button className="uppercase font-semibold tracking-wide text-xs text-slate-100 bg-slate-900 rounded-full px-4 py-3 hover:bg-black transition-colors ease-in duration-150">
          shop swim
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
