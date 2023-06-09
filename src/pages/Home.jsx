import React from 'react';
import { Outlet } from "react-router-dom";

// Components
import { MainBanner } from "../components/mainPage/MainBanner";
import { MainTabs } from "../components/mainPage/MainTabs";

export const Home = () => {

  return (
      <div className="main_content">
          <MainBanner/>
          <MainTabs/>
        <Outlet />
      </div>
  )
}