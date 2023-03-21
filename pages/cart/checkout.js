import Payment from "../../src/components/payment/payment";
import ContactInfo from "../../src/components/contactInfo/contactInfo";

function Checkout() {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <ContactInfo />
      <Payment />
    </div>
  );
}

export default Checkout;
