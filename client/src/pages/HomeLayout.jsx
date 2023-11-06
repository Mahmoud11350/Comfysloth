import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useContext, useState } from "react";

const HomeContext = createContext();
const HomeLayout = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => setMobileNav(!mobileNav);
  return (
    <HomeContext.Provider value={{ mobileNav, toggleMobileNav }}>
      <Navbar />
      <Outlet />
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
