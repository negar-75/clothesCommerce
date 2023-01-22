import Context from "../../../libs/context";
import { useContext } from "react";
import StoreGridItem from "../storeGridItem/storeGridItem";

function StoreGrid() {
  const data = useContext(Context);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2">
      {data.map((item) => (
        <StoreGridItem
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
}

export default StoreGrid;
