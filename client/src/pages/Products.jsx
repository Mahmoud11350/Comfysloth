import Heading from "../components/Heading";
import customFetch from "../utils/customFetch";
import queryClient from "../utils/queryClient";
import ProductsContainer from "../components/productsContainer";
import ProductsLgSidebar from "../components/ProductsLgSidebar";
import ProductSmSidebar from "../components/ProductSmSidebar";
export const queryStats = {
  queryKey: ["products"],
  queryFn: async () => {
    const { data } = await customFetch("/products");
    return data;
  },
};

export const loader = () => {
  const data = queryClient.fetchQuery(queryStats);
  return data;
};
const Products = () => {
  return (
    <>
      <Heading heading={"products"} />
      <div className="grid  grid-cols-[auto_1fr] gap-4 container mt-8 items-start">
        <ProductsLgSidebar />
        <ProductsContainer />
      </div>
    </>
  );
};
export default Products;
