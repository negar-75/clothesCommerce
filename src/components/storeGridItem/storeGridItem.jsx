import { addToCart } from "../../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function StoreGridItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="h-[550px] flex items-center flex-col">
      <div className=" h-[400px] w-[300px] mb-3 ">
        <img
          src={item.image}
          className="w-[100%] object-cover h-[100%]"
        />
      </div>
      <div className=" flex flex-col items-center justify-center ">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <button
          className="mt-3 uppercase font-semibold tracking-wide text-xs
         text-slate-900 bg-white rounded-full px-4 py-3 border
         border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default StoreGridItem;
