import logo from "./unlockfit.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <nav className="p-5 sticky top-0 w-full flex justify-between items-center border-2 h-16 text-black bg-white">
      <div className="w-28 cursor-pointer">
        <NavLink to="/">
          <img src={logo} alt="logo" className="object-cover" />
        </NavLink>
      </div>
      {currentUser ? (
        <div>
          <button
            className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <button className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl">
            <NavLink to="/register">SignUp</NavLink>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
