// src/components/Services.tsx
import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-background text-center text-white">
            <h2 className="text-4xl font-semibold mb-8">Nos Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Développement Web</h3>
                    <p>Création de sites web modernes, dynamiques et performants.</p>
                </div>
                <div className="bg-black p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Développement Mobile</h3>
                    <p>Applications mobiles sur iOS et Android avec React Native et Flutter.</p>
                </div>
                <div className="bg-black p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Consulting & Sécurité</h3>
                    <p>Audit de sécurité, optimisation des performances et plus encore.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
