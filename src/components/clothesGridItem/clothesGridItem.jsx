function ClothesGridItem({ image, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:365px;height:365px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
          <img
            alt=""
            src={image}
            decoding="async"
            data-nimg="fixed"
            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
            loading="lazy"
          />
        </span>
      </div>
      <h2>{title}</h2>
      <div className="mb-2 px-4">{desc}</div>
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
