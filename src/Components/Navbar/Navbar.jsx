import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPng from "/assets/user.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = (e) => {
      logOut()
      .then(res => console.log(res.user))
      .catch(err => console.log(err))
  }
  const links = (
    <>
      <li>
        <NavLink
        to='/'
          
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' >About</NavLink>
      </li>
      <li>
        <NavLink to='/career' >Career</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal flex gap-3">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={  userPng } />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Name
                    <span className="badge">New</span>
                  </a>
                </li>

                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {/* Login Button */}
            {
              user ? <button onClick={handleSignOut} className="btn">Log Out</button>
              : <Link to='/login'>
              <button className="btn">Login</button>
            </Link>
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
