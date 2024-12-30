const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2  items-center my-2">
      <div className="w-14 h-14">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-full overflow-hidden"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-yellow-600 font-semibold">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-500 text-sm">{item.recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
