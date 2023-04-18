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
      <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-16">
        <p className="text-xs">
          <Link href="/">
            <span className="text-gray-500 ">Home/ </span>
          </Link>
          orders
        </p>
      </div>
      <main className="px-9">
        <div className="divide-y-2">
          <div className="flex divide-x-2 gap-4 divide-stone-300 mb-10">
            <p>
              <span className="text-stone-500">Order Date : </span>
              {data.information.date}
            </p>

            <p className="text-green-800">
              <FontAwesomeIcon
                icon={faTruckFast}
                beatFade
                style={{
                  color: "green",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />
              Estimated delivery :{" "}
              {deliveryDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </p>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            {data.cart.map((item) => (
              <div className="flex items-end gap-4 p-3 justify-center ">
                <img
                  src={item.image}
                  className="w-[100px] h-[130px] object-cover rounded-md border-2 p-1 border-stone-500 "
                />
                <div className="flex flex-col items-baseline ">
                  <span>{item.title}</span>
                  <span className="align-middle">
                    <span className="text-[10px]">✗</span>
                    {item.quantity}
                  </span>
                  <span>{item.price}$</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4  p-3">
            <h4>Deliver to :</h4>
            <span>
              {data.information.firstName.toUpperCase() +
                "  " +
                data.information.lastName.toUpperCase()}
            </span>
            <span>{data.information.adress.toUpperCase()} </span>
            <span>{data.information.phone}</span>
          </div>
        </div>
      </main>
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
