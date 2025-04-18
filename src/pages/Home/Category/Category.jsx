// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import category images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-10"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <div className="uppercase text-3xl -mt-10 pb-10  text-center text-white ">
          Salads
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <div className="uppercase text-3xl -mt-10 pb-10 text-center text-white ">
          Soups
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <div className="uppercase text-3xl -mt-10 pb-10 text-center text-white ">
          Pizzas
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <div className="uppercase text-3xl -mt-10 pb-10 text-center text-white ">
          Deserts
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <div className="uppercase text-3xl -mt-10 pb-10 text-center text-white ">
          Salads
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
