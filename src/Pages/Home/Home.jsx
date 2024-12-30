import Banner from "./Banner/Banner";
import ChefService from "./ChiefService/ChefService";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <ChefService></ChefService>
      <Menu></Menu>
    </div>
  );
};

export default Home;
