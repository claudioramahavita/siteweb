// src/components/Footer.tsx 
const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center text-white">
            <p>&copy; {new Date().getFullYear()} Mon Entreprise. Tous droits réservés.</p>
            <p>Suivez-nous sur :</p>
            <div className="space-x-4 mt-2">
                <a href="https://twitter.com" className="text-white hover:text-primary">Twitter</a>
                <a href="https://linkedin.com" className="text-white hover:text-primary">LinkedIn</a>
                <a href="https://github.com" className="text-white hover:text-primary">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
