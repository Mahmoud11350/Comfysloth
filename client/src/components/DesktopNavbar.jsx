import { NavLink } from "react-router-dom";
import { links } from "../utils/navLinks";
const DesktopNavbar = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-8 capitalize">
        {links.map((link) => (
          <li className="text-lg">
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
  );
};
export default DesktopNavbar;
