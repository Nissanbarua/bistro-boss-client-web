import { Link } from "react-router-dom";

const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
<div>
<div className="flex gap-2  items-center my-2">
      <div className=" ">
        <img src={image} alt={name} className="h-14 w-14 rounded-badge" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-yellow-600 font-semibold">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-500 text-sm">{recipe}</p>
      </div>
    
    </div>
</div>
  );
};

export default MenuCard;
