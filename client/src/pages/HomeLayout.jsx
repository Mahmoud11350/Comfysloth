import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useContext, useState } from "react";
import Footer from "../components/Footer";

const HomeContext = createContext();
const HomeLayout = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => setMobileNav(!mobileNav);
  const [cart, setCart] = useState([]);
  const [productQuantatiy, setProductQuantity] = useState(1);
  const addToCart = (product) => setCart((cart) => [...cart]);
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
