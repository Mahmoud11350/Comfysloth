import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useHomeContext } from "../pages/HomeLayout";
import { useState } from "react";
const ProductInfo = ({ product }) => {
  const { handlePlusQuantity, handleMinusQuantity, addToCart } =
    useHomeContext();
  const {
    name,
    price,
    description,
    shipping,
    company,
    colors,
    productInCart,
    productQuantity,
  } = product;

  const reviews = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className="p-4 capitalize">
      <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase">
        {name}
      </h2>
      <div className="flex flex-row gap-1 mb-2">
        {reviews.map((review) => (
          <AiFillStar className="text-yellow-500" />
        ))}
      </div>

      <span className="text-mainColor font-bold block mb-4">{price} $</span>
      <p className="text-slate-500 tracking-wide leading-6 mb-2">
        {description}
      </p>
      <p>
        {" "}
        <span className="text-slate-900 font-bold ">Avalible :</span>{" "}
        {shipping == true ? "in stock" : "out of stock"}
      </p>
      <p className="my-2">
        {" "}
        <span className="text-slate-900 font-bold ">Brand :</span> {company}
      </p>
      <hr />
      <p className="mt-4 flex gap-4 items-center">
        <span className="text-slate-900 font-bold ">Colors :</span>{" "}
        {colors.map((color) => (
          <span
            className={`block w-8 h-8 rounded-full`}
            style={{
              backgroundColor: `${color}`,
            }}
          ></span>
        ))}
      </p>
      <div className="mt-4 flex items-center gap-8 justify-center">
        <button
          className="text-4xl text-slate-950  font-bold"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="text-4xl font-bold">{productQuantity}</span>
        <button
          className="text-4xl text-slate-950  font-bold"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>

      <Link
        to={"/cart"}
        disabled
        className={`${
          productInCart ? "pointer-events-none" : ""
        } mt-8 m-auto block bg-mainColor w-fit  py-2 px-4 text-white font-bold  tracking-wider rounded`}
        // onClick={() => addToCart({ product,  })}
      >
        Add To Cart
      </Link>
    </div>
  );
};
export default ProductInfo;
