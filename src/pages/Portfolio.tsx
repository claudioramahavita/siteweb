import { motion } from "framer-motion";

const projects = [
    { name: "GreenOption", desc: "Plateforme de trading automatisée", img: "/img/greenoption.jpg" },
    { name: "Madabot", desc: "Bot de trading intelligent", img: "/img/madabot.jpg" },
    { name: "CreiticPay", desc: "Système de paiement sécurisé", img: "/img/creiticpay.jpg" },
];

const Portfolio = () => {
    return (
        <section className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Réalisations</h2>
            <p className="mt-4 text-gray-600">Découvrez nos projets innovants</p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 shadow-lg rounded-lg bg-gray-100"
                    >
                        <img src={project.img} alt={project.name} className="rounded-lg w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.name}</h3>
                        <p className="text-gray-600">{project.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
