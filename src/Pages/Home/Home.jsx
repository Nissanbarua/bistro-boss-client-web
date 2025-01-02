import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ChefService from "./ChiefService/ChefService";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <ChefService></ChefService>
      <Menu></Menu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
