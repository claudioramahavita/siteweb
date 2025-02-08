import config from "../config/config";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center p-6 mt-12">
            <p>&copy; {new Date().getFullYear()} {config.site.name}. Tous droits réservés.</p>
            <p>📧 {config.footer.email} | 📞 {config.footer.phone} | 📍 {config.footer.address}</p>
        </footer>
    );
};

export default Footer;
