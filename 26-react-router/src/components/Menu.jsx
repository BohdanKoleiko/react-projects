import { NavLink } from "react-router-dom";

const Menu = function () {
   return (
      <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
         <NavLink to="/courses">Courses</NavLink>
      </nav>
   );
};

export default Menu;
