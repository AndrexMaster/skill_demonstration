import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const Header = () => {
  return(
      <>
          <header>
              <div className="menuList">
                  <Link to="/" className="item btn btn-secondary">Home</Link>
                  <Link to="/gitUsers" className="item btn btn-secondary">Git Users</Link>
                  <Link to="/auth" className="item btn btn-secondary">LogIn</Link>
              </div>
          </header>
          <Outlet />
      </>
  )
}