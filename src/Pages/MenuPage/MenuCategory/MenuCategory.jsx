import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
