import React, { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => (!prev));
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <h2>Kushal</h2>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className={`hamburger ${menuOpen ? 'open' : ''}`}
                    id="hamburger"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Header