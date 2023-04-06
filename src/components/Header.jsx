import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return(
      <header>
          <div className="container">
              <div className="row">
                  <Link to="/" className="col-md-2">Home</Link>
                  <Link to="/gitUsers" className="col-md-2">Git Users</Link>
              </div>
          </div>
      </header>
  )
}