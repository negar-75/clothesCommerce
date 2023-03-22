import {
  incrementQuantity,
  decrementQuantity,
} from "../../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

function QuantityBox({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="custom-number-input h-6 w-20 md:h-10 md:w-28">
      <div className="flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1 md:h-10">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none relative"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          <span className="m-auto md:text-2xl font-thin absolute translate-y-[-60%] translate-x-[-50%]">
            −
          </span>
        </button>
        <input
          className=" bg-gray-300 outline-none focus:outline-none text-center w-full md:font-semibold md:text-md border-none  md:text-basecursor-default flex items-center text-gray-700 "
          name="custom-input-number"
          value={quantity}
          type="number"
          readOnly
        ></input>
        <button
          data-action="increment"
          className="text-gray-600 bg-gray-300 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer relative"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          <span className="m-auto md:text-2xl font-thin absolute translate-y-[-60%] translate-x-[-50%]">
            +
          </span>
        </button>
      </div>
    </div>
  );
}

export default QuantityBox;
