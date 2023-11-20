import { useQuery } from "@tanstack/react-query";
import {
  queryStats as productQuery,
  useProductContext,
} from "../pages/Products";
import SingleProduct from "./SingleProduct";
import LoadingSpinner from "./LoadingSpinner";
const ProductsContainer = () => {
  const { queryObject } = useProductContext();
  const { data, isLoading } = useQuery(productQuery(queryObject));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data.products.map((product) => {
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
        })
      )}
    </div>
  );
};
export default ProductsContainer;
