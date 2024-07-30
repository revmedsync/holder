"use client";
import React, { useState, useEffect } from 'react';
import Links1 from './links/Links';
import Navmain from './navmain';
import Nvcont from './contactnav';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='fixed w-full top-0 z-50'>
                <Nvcont />
                <Navmain />
            </div>
            
        </div>
    );
}

export default Navbar;