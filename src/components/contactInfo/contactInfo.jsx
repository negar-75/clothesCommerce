import { useState, useEffect } from "react";

import { useWidth } from "../../../hooks/useWidth";

function ContactInfo({ setInformation, information }) {
  const width = useWidth();
  const wordsPerLine = width > 697 ? 7 : 3;

  const [formattedAdress, setFormattedAdress] = useState();

  useEffect(() => {
    const myarr = information.adress.split(",");
    let formatted = "";
    for (let i = 0; i < myarr.length; i++) {
      if ((i + 1) % wordsPerLine === 0) {
        formatted += "," + myarr[i] + "\n";
        setFormattedAdress(formatted);
      } else {
        if (i === 0) {
          formatted += myarr[i];
          setFormattedAdress(formatted);
        } else {
          formatted += "," + myarr[i];
          setFormattedAdress(formatted);
        }
      }
    }
  }, [width, information.adress]);

  const handleChange = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="basis-[60%]  lg:px-5 py-10">
      <div className="mb-10  lg:px-20 px-10">
        <h3 className=" mb-10"> Shipping information </h3>
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-4  ">
          <div className="flex flex-col gap-2">
            <label>First name</label>
            <input
              type="text"
              required
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Last name</label>
            <input
              type="text"
              required
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 lg:col-span-2">
            <label>Adress</label>
            <input
              type="text"
              required
              name="adress"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Zip code</label>
            <input
              type="text"
              required
              name="zipCode"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Phone number</label>
            <input
              type="text"
              required
              name="phone"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className=" lg:px-20 px-10">
        <h3 className=" mb-5">Receipt</h3>
        <div className=" flex flex-col gap-7 pb-10">
          <div className="flex justify-between">
            <span className="font-semibold">Customer names</span>
            <span>{information.firstName + " " + information.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Adress</span>
            <p className="  whitespace-pre-wrap max-w-[400px]">
              {formattedAdress ? formattedAdress : ""}
            </p>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Phone</span>
            <span>{information.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Zip code</span>
            <span>{information.zipCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total price</span>
            <span>{information.totalPrice}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
