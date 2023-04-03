import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../src/components/navbar/navbar";
import ShoppingCart from "../../src/components/shoppingCart/shoppingCart.jsx";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";

function Cart({ id }) {
  const state = useSelector((state) => state);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (id) {
      setCart(state.carts[id]);
    } else {
      setCart(state.items);
    }
  }, [id, state]);

  return (
    <div className="relative h-full pb-10">
      <header>
        <Navbar />
        <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-10">
          <p className="text-xs">
            <Link href="/">
              <span className="text-gray-500 ">Home/ </span>
            </Link>
            Your Shopping Cart
          </p>
        </div>
      </header>
      <main className="h-full">
        <div className="title md:py-2 mb-10">
          <h2 className="text-center">Your Shopping Cart</h2>
        </div>
        <ShoppingCart
          cartItems={cart}
          id={id}
        />
      </main>
    </div>
  );
}

export default Cart;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  console.log(session);
  if (session) {
    return {
      props: {
        id: session?.user?._id || session?.id,
      },
    };
  }

  return {
    props: {
      id: null,
    },
  };
}
