import { useContext } from "react";
import Context from "../../../libs/context";
import ClothesGridItem from "../clothesGridItem/clothesGridItem";

function ClothesGrid() {
  const [test, setTest] = useContext(Context);

  return <div className=" grid grid-cols-3 bg-red-800 gap-4 "></div>;
}

export default ClothesGrid;
