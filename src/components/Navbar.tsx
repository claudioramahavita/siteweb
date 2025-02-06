// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-black">
            <div className="text-white text-xl font-bold">Mon Entreprise</div>
            <ul className="flex space-x-8">
                <li><Link to="/" className="text-white hover:text-primary">Accueil</Link></li>
                <li><Link to="/services" className="text-white hover:text-primary">Services</Link></li>
                <li><Link to="/portfolio" className="text-white hover:text-primary">Portfolio</Link></li>
                <li><Link to="/contact" className="text-white hover:text-primary">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
