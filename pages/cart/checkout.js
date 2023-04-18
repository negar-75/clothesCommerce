import Payment from "../../src/components/payment/payment";
import ContactInfo from "../../src/components/contactInfo/contactInfo";
import { withIronSessionSsr } from "iron-session/next";
import { useState } from "react";

function Checkout({ totalPrice }) {
  const options = { year: "numeric", month: "long", day: "numeric" };

  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    zipCode: "",
    phone: "",
    totalPrice: totalPrice,
    date: new Date().toLocaleDateString("en-US", options),
  });

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <ContactInfo
        setInformation={setInformation}
        information={information}
      />
      <Payment information={information} />
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
