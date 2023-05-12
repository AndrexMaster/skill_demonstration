import React from "react";
import { Link } from "react-router-dom";

export const SideMenu = () => {
    return (
        <aside className="sideMenu">
            <div className="menuList">
                <Link to="/" className="item btn btn-secondary">Home</Link>
                <Link to="/gitUsers" className="item btn btn-secondary">Git Users</Link>
                <Link to="/auth" className="item btn btn-secondary">LogIn</Link>
            </div>
        </aside>
    );
}