import { useState, useEffect } from "react";
import { clearCart } from "../../../store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
function Payment({ information }) {
  const router = useRouter();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data } = useSession();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data?.id || data?.user?._id) {
      setCart(state.carts[data?.id || data?.user?._id]);
    } else {
      setCart(state.items);
    }
  }, []);

  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    expireYear: "",
    expireMonth: "",
    CVV2: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/information`,
        {
          method: "POST",
          body: JSON.stringify({
            information: information,
            cart: cart,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      router.push("/orders");
      dispatch(
        clearCart({
          clientId: data?.user?._id || data?.id || undefined,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };
  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substring(0, 16);

    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }

    return parts.length > 1 ? parts.join("-") : value;
  }

  return (
    <div className="basis-[40%] bg-stone-100 py-10 px-10">
      <div className="">
        <h3 className=" mb-10"> Cart details </h3>
        <div className="flex  justify-center">
          <div className="mb-10">
            <img
              src="/visa.svg"
              className="w-[100px] h-[50px]"
            />
          </div>
          <div>
            <img
              src="/mastercard.svg"
              className="w-[100px] h-[50px]"
            />
          </div>
          <div>
            <img
              src="/amex.svg"
              className="w-[100px] h-[50px]"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <form
            className="flex flex-col gap-5 w-[80%] "
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                autoFocus
                required
                name="cardNumber"
                value={cc_format(card.cardNumber)}
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="w-[100%] rounded-md"
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Cart name"
                className="w-[100%] rounded-md"
                name="cardName"
                required
                onChange={handleInput}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="mb-4">Expiration Date</h5>
                <div className="flex gap-5 ">
                  <div>
                    <input
                      type="number"
                      className=" rounded-md w-[80px]"
                      placeholder="Month"
                      name="expireMonth"
                      required
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      required
                      className=" rounded-md w-[80px]"
                      placeholder="Year"
                      name="expireDate"
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="mb-4">CVV2</h5>
                <div>
                  <input
                    type="number"
                    required
                    className=" rounded-md w-[80px]"
                    placeholder="CVV2"
                    name="CVV2"
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <button className="w-[100%] border-2 py-3 border-black mt-4">
              PAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Payment;
