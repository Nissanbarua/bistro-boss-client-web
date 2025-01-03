import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle";

const Menus = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* offered items */}
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="Desserts"
      ></MenuCategory>
      {/* pizza item */}
      <MenuCategory title="pizzas" img={pizzaImg} items={pizzas}></MenuCategory>
      {/* salads */}
      <MenuCategory title="salads" img={saladImg} items={salads}></MenuCategory>
      {/* soup */}
      <MenuCategory title="soups" img={soupImg} items={soups}></MenuCategory>
    </div>
  );
};

export default Menus;
