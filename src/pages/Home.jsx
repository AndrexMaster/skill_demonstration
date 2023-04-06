import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <span>Here's home page</span>
                  </div>
              </div>
          </div>
        <Outlet />
      </>
  )
}