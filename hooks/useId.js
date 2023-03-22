import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
export function useIdForGetCart() {
  const [cart, setCart] = useState([]);
  const { data } = useSession();
  console.log(data);
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    if (data) {
      if (data.user.user.id === state.userId) {
        console.log("negar");
        setCart(state.cart);
      } else {
        setCart([]);
      }
    }
  }, [data, state]);

  return {
    cart,
  };
}
