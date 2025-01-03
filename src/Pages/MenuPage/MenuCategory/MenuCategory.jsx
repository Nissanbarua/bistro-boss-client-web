import { Link } from "react-router-dom";
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
      <Link to={`/order/${title}`} className="flex justify-center my-5">
        <button className="btn bg-[#E8E8E8] text-yellow-500 border-b-yellow-500 border-2 hover:bg-black hover:text-white transition duration-200">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
