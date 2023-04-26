import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
      <>
          <div className="row">
              <div className="col-md-12">
                  <span>Here's home page</span>
              </div>
          </div>
        <Outlet />
      </>
  )
}