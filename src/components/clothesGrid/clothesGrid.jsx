import { useContext } from "react";
import Context from "../../../libs/context";
import ClothesGridItem from "../clothesGridItem/clothesGridItem";

function ClothesGrid() {
  const value = useContext(Context);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {value.map((item) => (
        <ClothesGridItem
          image={item.image}
          desc={item.desc}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default ClothesGrid;
