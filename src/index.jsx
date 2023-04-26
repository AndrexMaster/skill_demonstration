// import logo from './logo.svg';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Components
// import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";

import { Home } from "./pages/Home";
import { GitUsersList } from "./pages/GitUsersList";
import { CurrGitUser } from "./pages/CurrGitUser";

// Styles
import './index.css';
import './App.css';

export const App = () => {
        return (
        <div id="app-wrapper">
            <SideMenu />
            <div className="container content-wrapper">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/gitUsers" element={<GitUsersList/>} />
                    <Route path="/gitUsers/:login" element={<CurrGitUser/>} />
                </Routes>
            </div>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);