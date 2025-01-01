import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuCard from "../../Shared/MenuCard";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data.slice(0, 6));
      });
  }, []);
  return (
    <section className="mb-6">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {menuItems.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </section>
  );
};

export default Menu;
