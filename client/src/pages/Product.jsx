import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import ProductInfo from "../components/ProductInfo";
import ProductImage from "../components/ProductImage";
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
    <section>
      <Heading heading={product.name} />
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </section>
  );
};
export default Product;
