import customFetch from "../utils/customFetch";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import ProductInfo from "../components/ProductInfo";
import ProductImage from "../components/ProductImage";
import Footer from "../components/Footer";
export const loader = async ({ params }) => {
  const { id } = params;

  try {
    const { data } = await customFetch(`/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
const Product = () => {
  const { product } = useLoaderData();
  return (
    <section className="">
      <Heading heading={product.name} />
      <Link
        to={"/products"}
        className="p-4 bg-mainColor m-4 block w-fit rounded-lg font-bold text-white uppercase hover:bg-mainColor/70 transition-colors "
      >
        back to prodcts
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2   ">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
};
export default Product;
