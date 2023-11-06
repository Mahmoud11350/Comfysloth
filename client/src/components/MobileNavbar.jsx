import Logo from "./Logo";
import { links } from "../utils/navLinks";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheckFill } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { useHomeContext } from "../pages/HomeLayout";

const MobileNavbar = () => {
  const hLinks = [
    { to: "cart", icon: <BsCartCheckFill /> },
    { to: "login", icon: <BiSolidUserAccount /> },
  ];
  const { toggleMobileNav } = useHomeContext();
  return (
    <div className="absolute z-10 bg-white inset-0  p-6 lg:hidden">
      <div className="flex items-center justify-between">
        <Logo />
        <RxCross1
          className="text-3xl text-red-600 cursor-pointer "
          onClick={toggleMobileNav}
        />
      </div>
      <div className="">
        <ul className="flex flex-col mt-12 gap-8 capitalize">
          {links.map((link) => (
            <li className="text-lg" onClick={toggleMobileNav}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive == true
                    ? "bg-mainColor font-semibold text-white py-1 px-2 rounded text-xl"
                    : ""
                }
                end
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 ">
        <ul className="flex items-center justify-center gap-8 capitalize text-lg">
          {hLinks.map((hlink) => (
            <li onClick={toggleMobileNav}>
              <NavLink
                to={`/${hlink.to}`}
                className={({ isActive }) =>
                  isActive == true
                    ? "bg-mainColor font-semibold text-white py-1 px-2 rounded text-lg flex items-center gap-2"
                    : "flex items-center gap-2"
                }
                end
              >
                {hlink.icon}
                {hlink.to}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MobileNavbar;
