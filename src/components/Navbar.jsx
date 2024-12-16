import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/abmlogo.png';
import { Link } from 'react-scroll';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Sticky navbar when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "bg-black" : "bg-black"}`}>
            <nav className={`py-4 lg:px-24 px-4 flex items-center justify-between ${isSticky ? "bg-black" : "bg-black"} transition-all duration-300 ease-in`}>
                <div className="logo-container flex items-center">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <div className="company-info ml-3">
                        <span className="company-name">ABM Electricals</span>
                        <span className="tagline text-white text-sm">'A' GRADE ELECTRICAL ENGINEERS & CONTRACTORS</span>
                    </div>
                </div>

                {/* Menu items for larger devices */}
                <ul className='hidden lg:flex space-x-12 navItems'>
                    <li>
                        <Link
                            to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='about'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='services'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='gallery'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='clients'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                           Our Clients
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='contact'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-base text-white hover:text-red-500 cursor-pointer'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Menu button visible on mobile screens only */}
                <div className='lg:hidden'>
                    <button
                        className='text-white focus:outline-none transition-all duration-300 ease-in'
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBarsStaggered className='h-6 w-6' />}
                    </button>
                </div>

                {/* navItems for small devices */}
                <div className={`space-y-4 px-4 mt-14 py-7 bg-black transition-all duration-300 ease-in ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    <Link
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to='services'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to='gallery'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to='clients'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Clients
                    </Link>
                    <Link
                        to='contact'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='block text-base text-white hover:text-red-500 cursor-pointer'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;