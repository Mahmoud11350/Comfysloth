import Heading from "../components/Heading";
import customFetch from "../utils/customFetch";
// import queryClient from "../utils/queryClient";
import ProductsContainer from "../components/productsContainer";
import ProductsLgSidebar from "../components/ProductsLgSidebar";
import { useNavigation } from "react-router-dom";
import { useContext, createContext, useState } from "react";
const ProductContext = createContext();

export const queryStats = (params) => {
  // console.log(params);
  // const { search, category, company, color } = params;
  return {
    queryKey: [
      "products",
      // search ?? "",
      // category ?? "all",
      // company ?? "all",
      // color ?? "all",
    ],
    queryFn: async () => {
      const { data } = await customFetch("/products");
      return data;
    },
  };
};

const Products = () => {
  const navigation = useNavigation();
  const [querObject, setQueryObject] = useState({
    search: "",
    category: "all",
    company: "all",
    color: "all",
  });
  const handleQueryChange = (value) => {
    setQueryObject((querObject) => {
      return {
        ...querObject,
        ...value,
      };
    });
  };
  return (
    <>
      <ProductContext.Provider value={{ handleQueryChange, querObject }}>
        {navigation.state == "loading" ? "loading" : ""}
        <Heading heading={"products"} />
        <div className="grid  grid-cols-[auto_1fr] gap-4 container mt-8 items-start">
          <ProductsLgSidebar />
          <ProductsContainer />
        </div>
      </ProductContext.Provider>
    </>
  );
};

export const useProductContext = () => useContext(ProductContext);
export default Products;
