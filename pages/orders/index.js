import { withIronSessionSsr } from "iron-session/next";

import { getSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layOut";
import Link from "next/link";
function Orders({ data, id }) {
  const deliveryDate = new Date(data.information.date);
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  return (
    <Layout>
      <div className=" bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-16">
        <p className="text-xs">
          <Link href="/">
            <span className="text-gray-500 ">Home/ </span>
          </Link>
          orders
        </p>
      </div>

      {data.cart.length === 0 ? (
        <div className="text-center">
          <h3>You have not ordered anything yet</h3>
        </div>
      ) : (
        <>
          <div className="divide-y-2 px-5 w-[100%] ">
            <div className="flex md:divide-x-2 gap-4 divide-stone-300 md:mb-10 flex-col md:flex-row mb-6">
              <p>
                <span className="text-stone-500">Order Date : </span>
                {data.information.date}
              </p>

              <p className="text-green-800">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  beatFade
                  className="md:mx-2 text-green-700 mr-2"
                />
                Estimated delivery :{" "}
                {deliveryDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </p>
            </div>
            <div className="flex overflow-x-scroll py-3 ">
              {data.cart.map((item) => (
                <div className="flex items-center md:gap-4 md:p-3  gap-2 md:flex-[0_0_18%] flex-[0_0_75%]  mr-1 ">
                  <img
                    src={item.image}
                    className="w-[160px] h-[230px] object-cover rounded-md border-2 p-1 border-stone-500 "
                  />
                  <div className="flex flex-col items-baseline  text-lg">
                    <span className="font-semibold">{item.title}</span>
                    <span className="align-middle">
                      <span className="text-[10px]">✗</span>
                      {item.quantity}
                    </span>
                    <span>{item.price * item.quantity}$</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 px-5">
            <h4>Deliver to :</h4>
            <span>
              {data.information.firstName.toUpperCase() +
                "  " +
                data.information.lastName.toUpperCase()}
            </span>
            <span>{data.information.adress.toUpperCase()} </span>
            <span>{data.information.phone}</span>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Orders;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps(ctx) {
    const data = ctx.req.session.data;
    const session = await getSession(ctx);

    return {
      props: {
        data,
        id: session ? session?.user?._id || session?.id : null,
      },
    };
  },
  {
    password: process.env.SESSION_SECRET,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
