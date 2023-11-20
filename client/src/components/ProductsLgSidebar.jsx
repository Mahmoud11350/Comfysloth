import { useState } from "react";
import { useProductContext } from "../pages/Products";

const category = [
  "all",
  "office",
  "living room",
  "kitchen",
  "bedroom",
  "dining",
  "kids",
];
const compines = ["all", "marcos", "liddy", "ikea", "caressa"];
const colors = ["all", "#FF7F7F", "#7FFF7F", "#7F7FFF", "#7F7F7F", "#FFDC7F"];

const ProductsLgSidebar = () => {
  const { handleQueryChange, querObject } = useProductContext();
  return (
    <div className="sticky left-0 top-2">
      <input
        type="text"
        placeholder="Search"
        className="border rounded text-lg py-1 px-2"
        value={querObject.search}
        onChange={(e) => handleQueryChange({ search: e.target.value })}
      />
      <div className="capitalize my-2">
        <h3 className="text-lg font-bold mb-2">Category</h3>
        <ul>
          {category.map((category) => (
            <li
              className="mb-[2px] px-2 py-2 hover:bg-mainColor hover:text-white cursor-pointer"
              onClick={() => handleQueryChange({ category })}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="capitalize my-2">
        <h3 className="text-lg font-bold mb-2">Compnay</h3>
        <select
          name="company"
          id=""
          className="w-full capitalize bg-mainColor/60 p-2"
          value={querObject.company}
          onChange={(e) => handleQueryChange({ company: e.target.value })}
        >
          {compines.map((company) => (
            <option>{company}</option>
          ))}
        </select>
      </div>
      <div className="capitalize my-2">
        <h3 className="text-lg font-bold mb-2">Colors</h3>
        <ul className="flex items-center justify-between">
          {colors.map((color) => (
            <li
              className={`w-[20px] h-[20px] rounded-full `}
              style={{ backgroundColor: color }}
              onClick={() => handleQueryChange({ color })}
            >
              {color == "all" ? "all" : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductsLgSidebar;
