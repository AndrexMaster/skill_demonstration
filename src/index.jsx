// import logo from './logo.svg';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Container } from '@chakra-ui/react'

// Components
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { Home } from "./pages/Home";
import { GitUsersList } from "./pages/GitUsersList";
import { UserAuth } from "./pages/UserAuth";

// Styles
import './index.css';
import './App.css';

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