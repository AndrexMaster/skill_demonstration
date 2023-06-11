// import logo from './logo.svg';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'

// Components
import { Header } from "./js/components/Header";
// import { SideMenu } from "./js/components/SideMenu";
import { Home } from "./js/pages/Home";
import { GitUsersList } from "./js/pages/GitUsersList";
import { UserAuth } from "./js/pages/UserAuth";

// Styles
import './css/index.css';
import './css/App.css';

export const App = () => {
    return (
        <div id="app-wrapper">
            <Routes>
                <Route element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/gitUsers" element={<GitUsersList />} />
                    <Route path="/auth" element={<UserAuth type="login" />} />
                </Route>
            </Routes>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);