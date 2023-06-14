import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const Header = () => {
    const [headerClassName, setHeaderClassName] = useState('');
    const [windowOffset, setWindowOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setWindowOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (windowOffset > 2) {
            setHeaderClassName('header_scrolled')
        }else{
            setHeaderClassName('')
        }
    }, [windowOffset])


  return(
      <>
          <header className={headerClassName}>
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