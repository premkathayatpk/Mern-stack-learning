import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white flex space-x-2 p-3 text-xl font-bold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </div>
  );
};

export default Header;
