import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    return (
        <section className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full max-w-5xl"
            >
                <SwiperSlide>
                    <div className="text-center p-10">
                        <h1 className="text-4xl font-bold">Développement Web & Mobile</h1>
                        <p className="mt-4">Des solutions modernes et performantes pour votre entreprise.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center p-10">
                        <h1 className="text-4xl font-bold">Location & Vente de Logiciels</h1>
                        <p className="mt-4">Accédez à des outils professionnels en toute simplicité.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
