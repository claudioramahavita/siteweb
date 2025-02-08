import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
