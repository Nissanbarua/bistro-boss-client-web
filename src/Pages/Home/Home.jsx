import Banner from "./Banner/Banner";
import ChefService from "./ChiefService/ChefService";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <ChefService></ChefService>
      <Menu></Menu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
