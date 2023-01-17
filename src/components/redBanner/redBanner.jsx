import Image from "next/image";
function RedBanner() {
  return (
    <div
      className=" bg-stone-400 relative mx-6 mb-6 "
      style={{ minHeight: 250 }}
    >
      <Image
        src="https://source.unsplash.com/cTO2DcOEBts"
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute z-10 top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 flex flex-col 
        items-center justify-center py-5 px-7 text-white"
      >
        <p className="mb-2  font-medium tracking-wide">Introducing</p>
        <div className="container mb-4 flex flex-col items-center justify-center ">
          <img
            src="https://images.contentstack.io/v3/assets/blt37e5d9fa4b15e084/bltf5fb6af5e68892b8/5fb11bb909ed4c6f277ed22d/lp_giftguide_afterpay_lockup.png"
            alt="lp_giftguide_afterpay_lockup.png"
          />
          <p>Chicas NOW. Pay LATER.</p>
          <p>With easy, interest-free installments</p>
        </div>

        <button className="uppercase font-semibold tracking-wide text-xs text-slate-900 bg-slate-200 rounded-full  py-3 px-4 placeholder-shown: border border-slate-400 hover:border-black transition ease-linear duration-150">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default RedBanner;
