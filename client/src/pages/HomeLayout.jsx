import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useContext, useState } from "react";
import Footer from "../components/Footer";
import customFetch from "../utils/customFetch";
import queryClient from "../utils/queryClient";
import { useQuery } from "@tanstack/react-query";
import { use } from "express/lib/router";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch.get("users/current-user");
    return data?.user;
  },
};

export const loader = async () => {
  try {
    const data = await queryClient.ensureQueryData(userQuery);
    return data;
  } catch (error) {
    return null;
  }
};

const HomeContext = createContext();
const HomeLayout = () => {
  const { data } = useQuery(userQuery);
  const [user, setUser] = useState(data);
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => setMobileNav(!mobileNav);
  const [cart, setCart] = useState([]);
  const [productQuantatiy, setProductQuantity] = useState(1);

  const addToCart = ({ product, productQuantatiy }) =>
    setCart((cart) => [...cart, { ...product, productQuantatiy }]);

  const handlePlusQuantity = () => {
    setProductQuantity((quantatity) => ++quantatity);
    if (productQuantatiy >= 8) return setProductQuantity(8);
  };
  const handleMinusQuantity = () => {
    setProductQuantity((quantatity) => --quantatity);
    if (productQuantatiy <= 1) return setProductQuantity(1);
  };
  return (
    <HomeContext.Provider
      value={{
        mobileNav,
        toggleMobileNav,
        cart,
        productQuantatiy,
        addToCart,
        handlePlusQuantity,
        handleMinusQuantity,
        user,
      }}
    >
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
