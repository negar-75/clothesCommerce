import React from "react";
import { useSelector } from "react-redux";
import DiscountBox from "../discountBox/discountBox";
import OrderSummaryBox from "../orderSummaryBox/orderSummaryBox";
import { removeFromCart } from "../../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import QuantityBox from "../quantityBox/quantityBox";
import AnimatedDiv from "../animatedDiv/animatedDiv";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="grid grid-cols-12 md:mx-32 mx-5 ">
      <table className="col-span-12 mb-6 ">
        <thead>
          <tr className="border-b-2 border-stone-200">
            <th className="text-start md:w-[20px] ">Product</th>
            <th className="text-start md:w-[50px]">Price</th>
            <th className="text-start md:w-[50px]">Quantity</th>
            <th className="text-start md:w-[50px]">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((row) => {
            return (
              <tr
                key={row.id}
                className="border-b-2 border-stone-200"
              >
                <td>
                  <div className="flex items-center py-3 gap-2 md:gap-6 md:pl-0">
                    <div className=" md:w-[130px] md:h-[163px] w-[90px] relative overflow-hidden group">
                      <img
                        src={row.image}
                        className="object-cover w-[100%] h-[100%] object-top group-hover:opacity-70"
                      />
                      <h6
                        onClick={() => dispatch(removeFromCart(row.id))}
                        className="absolute bottom-[-60px] text-center py-1 text-white transition-bottom duration-200 ease-linear
                       bg-gray-400 right-0 left-0 font-light group-hover:bottom-[40%] cursor-pointer "
                      >
                        Remove product
                      </h6>
                    </div>
                    <span className="font-semibold text-sm md:text-lg">
                      {row.title}
                    </span>
                  </div>
                </td>
                <td>
                  <span className="md:text-lg text-sm">${row.price}</span>
                </td>
                <td>
                  <QuantityBox
                    value={row.quantity}
                    id={row.id}
                  />
                </td>
                <td>
                  <span className="md:text-lg font-semibold text-sm">
                    ${row.quantity * row.price}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <DiscountBox />
      <OrderSummaryBox totalPrice={getTotalPrice()} />
    </div>
  );
}

export default ShoppingCart;
