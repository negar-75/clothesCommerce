import Link from "next/link";
import React from "react";
import Navbar from "../../src/components/navbar/navbar";
import ShoppingCart from "../../src/components/shoppingCart/shoppingCart.jsx";

function Cart() {
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
        <ShoppingCart />
      </main>
    </div>
  );
}

export default Cart;
