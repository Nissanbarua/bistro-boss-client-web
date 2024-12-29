import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Slider = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="w-4/5 mx-auto mt-10 mb-10 text-white text-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="text-xl md:text-3xl font-semibold -mt-16 text-center uppercase">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className=" text-xl md:text-3xl font-semibold -mt-16 text-center uppercase">
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="text-xl md:text-3xl font-semibold -mt-16 text-center uppercase">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="text-xl md:text-3xl font-semibold -mt-16 text-center uppercase">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="text-xl md:text-3xl font-semibold -mt-16 text-center uppercase">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
