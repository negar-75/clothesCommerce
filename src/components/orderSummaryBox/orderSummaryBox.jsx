import React from "react";
import { useRouter } from "next/router";

function OrderSummaryBox({ totalPrice }) {
  const router = useRouter();
  return (
    <div className="lg:col-span-4 bg-stone-200 flex flex-col py-5 rounded-md col-span-12 px-5 ">
      <div className="info  border-b-2 border-black pb-6 mb-6 px-5 w-screen max-w-[100%] ">
        <h3>Order Summary</h3>
        <div className="flex justify-between">
          <h6 className=""> Total price</h6>
          <p className="">${totalPrice}</p>
        </div>
      </div>
      <div className="checkout lg:text-center">
        <button
          className="md:ml-7 uppercase font-semibold text-xs
           text-slate-900 bg-white rounded-full md:px-10 md:py-3 border px-5 py-2
           border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer"
          onClick={() =>
            router.push({
              pathname: "/cart/checkout",
              query: { price: totalPrice },
            })
          }
        >
          Check out
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryBox;
