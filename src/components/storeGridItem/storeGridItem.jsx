import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../store/slices/cart.slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";

function StoreGridItem({ item }) {
  const dispatch = useDispatch();
  const { data } = useSession();
  const state = useSelector((state) => state);
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const getTotalQuantity = (id) => {
    if (data) {
      const clientId = data?.user?._id || data?.id;
      const item = state.carts[clientId].find((item) => item.id === id);
      return item ? item.quantity : 0;
    } else {
      const item = state.items.find((product) => product.id === id);
      return item ? item.quantity : 0;
    }
  };

  const quantity = getTotalQuantity(item.id);

  return (
    <div
      className="h-[550px] flex items-center flex-col"
      // data-aos="fade-in"
    >
      <div className=" h-[400px] w-[300px] mb-3 ">
        <img
          src={item.image}
          className="w-[100%] object-cover h-[100%]"
          alt={item.title}
        />
      </div>
      <div className=" flex flex-col items-center justify-center ">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        {quantity === 0 ? (
          <button
            className="mt-3 uppercase font-semibold tracking-wide text-xs
         text-slate-900 bg-white rounded-full px-4 py-3 border
         border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer"
            onClick={() =>
              dispatch(
                addToCart({
                  item,
                  id: data?.user?._id || data?.id || undefined,
                })
              )
            }
          >
            Add to cart
          </button>
        ) : (
          <div className="flex gap-3 mt-4 justify-center items-center  px-4 py-1">
            <div
              className=" bg-stone-200 rounded-[50%] w-[30px] h-[30px] table cursor-pointer transition-transform duration-300 active:scale-150"
              onClick={() => {
                dispatch(
                  decrementQuantity({
                    clientId: data?.user?._id || data?.id || undefined,
                    id: item.id,
                  })
                );

                setButtonIsClicked((pre) => !pre);
              }}
            >
              <span className="table-cell text-center font-semibold">-</span>
            </div>
            <div className="border border-stone-500 w-[50px] h-[30px] flex items-center justify-center rounded-md ">
              <span className="font-semibold">{quantity}</span>
            </div>

            <div
              className=" bg-stone-200 rounded-[50%] w-[30px] h-[30px] table cursor-pointer  transition-transform duration-300 active:scale-150"
              onClick={() =>
                dispatch(
                  incrementQuantity({
                    clientId: data?.user?._id || data?.id || undefined,
                    id: item.id,
                  })
                )
              }
            >
              <span className="table-cell text-center font-semibold">+</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreGridItem;
