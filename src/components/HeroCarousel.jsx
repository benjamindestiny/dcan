import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import game from "../assets/game.jpg";
import kitchen from "../assets/kitchen.jpg";
import fashion from "../assets/fashion.jpg";
import holiday from "../assets/holiday.jpg";

const HeroCarousel = () => {
  const slides = [game, kitchen, fashion, holiday];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient fade effect (to blend bottom with next section) */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-[#e3e6e6] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroCarousel;
