import { Swiper, SwiperSlide } from 'swiper/react'; // Importation correcte
import { Navigation, Autoplay } from 'swiper'; // Modules importés directement depuis 'swiper'
import 'swiper/swiper-bundle.min.css'; // Importation correcte des styles Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Si tu veux la navigation
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <Swiper
                modules={[Navigation, Autoplay]} // Ajout des modules à Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                className="w-full max-w-4xl"
            >
                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="p-10 bg-gray-800 rounded-lg shadow-lg"
                    >
                        <h1 className="text-4xl font-bold text-blue-400">Développement Web</h1>
                        <p className="mt-4 text-gray-300">Création de sites modernes et performants.</p>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="p-10 bg-gray-800 rounded-lg shadow-lg"
                    >
                        <h1 className="text-4xl font-bold text-blue-400">Application Mobile</h1>
                        <p className="mt-4 text-gray-300">Développement d’apps iOS & Android.</p>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="p-10 bg-gray-800 rounded-lg shadow-lg"
                    >
                        <h1 className="text-4xl font-bold text-blue-400">Consultation IT</h1>
                        <p className="mt-4 text-gray-300">Conseils et stratégies technologiques.</p>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero;
