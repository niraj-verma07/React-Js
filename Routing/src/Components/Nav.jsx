import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-10">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
