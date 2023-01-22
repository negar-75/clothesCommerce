import React from "react";

function DiscountBox() {
  return (
    <div className="md:col-span-8 lg:px-12 col-span-12 px-3 mb-6">
      <div className="discount-code  flex flex-col gap-5">
        <label htmlFor="discount-code">Have a promo code for checkout?</label>
        <div className="container flex flex-col items-start gap-3 md:flex-row">
          <input
            id="discount-code"
            type="text"
            className="form-input rounded-full lg:w-[60%] w-[80%]"
          />
          <button
            className="ml-7 uppercase font-semibold tracking-wide text-xs
         text-slate-900 bg-white rounded-full px-10 py-3 border
         border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscountBox;
