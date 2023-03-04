import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function MasterLayOut() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        // console.log(theme)
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <div className={`${theme}`}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}
