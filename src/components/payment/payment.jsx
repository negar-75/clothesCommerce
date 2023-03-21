function Payment() {
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
          <form className="flex flex-col gap-5  w-[80%]">
            <div>
              <input
                type="number"
                placeholder="Cart Number"
                className="w-[100%] rounded-md"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Cart name"
                className="w-[100%] rounded-md"
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
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className=" rounded-md w-[80px]"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="mb-4">CVV2</h5>
                <div>
                  <input
                    type="number"
                    className=" rounded-md w-[80px]"
                    placeholder="CVV2"
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
