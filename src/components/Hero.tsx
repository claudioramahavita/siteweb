// src/components/Hero.tsx 
const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-primary text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4">Développement Web et Mobile</h1>
            <p className="text-xl mb-8">Des solutions sur-mesure pour propulser votre entreprise.</p>
            <a href="#services" className="px-6 py-3 bg-secondary text-white rounded-lg text-lg hover:bg-purple-700">
                Nos Services
            </a>
        </section>
    );
};

export default Hero;
