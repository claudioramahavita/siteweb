// src/pages/Home.tsx 
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
