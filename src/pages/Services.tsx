import config from "../config/config";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
            <p className="mt-4 text-gray-600">{config.site.description}</p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {config.services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 shadow-lg rounded-lg bg-gray-100"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
