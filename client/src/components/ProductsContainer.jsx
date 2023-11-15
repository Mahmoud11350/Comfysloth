import { useQuery } from "@tanstack/react-query";
import { queryStats as productQuery } from "../pages/Products";
import SingleProduct from "./SingleProduct";
const ProductsContainer = () => {
  const { data } = useQuery(productQuery);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data.products.map((product) => {
        const { name, price, image, _id } = product;
        return (
          <SingleProduct
            name={name}
            image={image}
            price={price}
            _id={_id}
            key={_id}
          />
        );
      })}
    </div>
  );
};
export default ProductsContainer;
