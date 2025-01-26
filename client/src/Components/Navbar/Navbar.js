import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="w-100 min-h-20 bg-green-700">
      <div className="flex text-white items-center gap-5 mx-10 py-4 w-100">
        <Link className="italic text-5xl" to="/">
          GoFood
        </Link>
        <div className="flex grow items-center text-xl justify-between">
          <div className="flex">
            <Link className="nav-link active fs-5 px-3" aria-current="page" to="/">
              Home
            </Link>
            <Link
              className="nav-link active fs-5 px-3"
              aria-current="page"
              to="/myorder"
            >
              My Orders
            </Link>
          </div>

          {localStorage.getItem("authToken") ? (
            <div>
              <Link to={"/cart"} className="btn bg-white text-success mx-2">
                {" "}
                My Cart{" "}
              </Link>
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handleLogout}
              >
                {" "}
                Logout{" "}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-medium text-base">
              <Link
                className="text-black py-1 px-2 bg-white rounded-md"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="text-black py-1 px-2 bg-white rounded-md"
                to="/signup"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
