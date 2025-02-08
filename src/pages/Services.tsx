import { motion } from "framer-motion";

function Services() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="container py-20"
        >
            <h2 className="text-3xl font-bold text-blue-400">Nos Services</h2>
            <p className="mt-4 text-gray-300">Nous proposons des solutions adaptées à vos besoins.</p>
        </motion.div>
    );
}

export default Services;
