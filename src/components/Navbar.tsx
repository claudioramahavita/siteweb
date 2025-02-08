import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="container flex justify-between items-center py-4">
                <Link to="/" className="text-2xl font-bold text-blue-400">
                    CREITIC
                </Link>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                    <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;
