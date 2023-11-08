import { useLoaderData } from "react-router-dom";
import Contact from "../components/Contact";
import CustomFurniture from "../components/CustomFurniture";
import Footer from "../components/Footer";
import Home from "../components/Home";
import customFetch from "../utils/customFetch";
import FeaturedProducts from "../components/FeaturedProducts";
export const loader = async () => {
  try {
    const { data } = await customFetch("/products/featured");
    return data;
  } catch (error) {
    return null;
  }
};
const Landing = () => {
  const { featuredProducts } = useLoaderData();
  return (
    <>
      <Home />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <CustomFurniture />
      <Contact />
      <Footer />
    </>
  );
};
export default Landing;
