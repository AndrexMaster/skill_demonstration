import React from 'react';
import { Outlet } from "react-router-dom";

// Components
import { MainBanner } from "../components/mainPage/MainBanner";
import { MainTabs } from "../components/mainPage/MainTabs";

// Css
import '../../css/pages/mainPage.css'
export const Home = () => {

  return (
      <div className="main-content">
          <MainBanner/>
          <MainTabs/>
        <Outlet />
      </div>
  )
}