import { useContext } from "react";
import Context from "../../../libs/context";
import CategoriesGridItem from "../categoriesGridItem/categoriesGridItem";

function CategoriesGrid() {
  const value = useContext(Context);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-5">
      {value.map((item) => (
        <CategoriesGridItem
          key={item.title}
          image={item.image}
          desc={item.desc}
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
}

export default CategoriesGrid;
