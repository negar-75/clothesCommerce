import Payment from "../../src/components/payment/payment";
import ContactInfo from "../../src/components/contactInfo/contactInfo";
import { withIronSessionSsr } from "iron-session/next";

function Checkout({ totalPrice }) {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <ContactInfo price={totalPrice} />
      <Payment />
    </div>
  );
}

export default Checkout;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const totalPrice = req.session.totalPrice;

    return { props: { totalPrice } };
  },
  {
    password: process.env.SESSION_SECRET,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
