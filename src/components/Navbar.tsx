import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import config from "../config/config";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-500">{config.site.name}</Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    {config.navLinks.map((link, index) => (
                        <motion.div whileHover={{ scale: 1.1 }} key={index}>
                            <Link to={link.path} className="hover:text-blue-400 transition">{link.name}</Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bouton Mobile */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    ☰
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <div className="md:hidden bg-gray-800 py-2 text-center">
                    {config.navLinks.map((link, index) => (
                        <Link key={index} to={link.path} className="block py-2 hover:text-blue-400" onClick={() => setOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
