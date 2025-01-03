import { Link } from "react-router-dom";

const OrderCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex justify-center ">
      <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden  ">
        {/* <!-- Image Section --> */}
        <div className="relative">
          <img src={image} alt="" className="w-full h-44 object-cover p-2" />
          {/* <!-- Price Tag --> */}
          <span className="absolute top-2 right-2 bg-black text-white text-sm font-bold py-1 p-4 rounded">
            ${price}
          </span>
        </div>

        {/* <!-- Content Section --> */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mt-2 mb-4">{recipe}</p>
          {/* <!-- Button --> */}
          {/* <button className="w-full bg-yellow-500 text-black text-sm font-bold py-2 rounded-lg transition duration-200 hover:bg-black hover:text-white">
          ADD TO CART
        </button> */}
          <Link>
            <button className="btn bg-[#E8E8E8] w-full text-yellow-500 border-b-yellow-500 border-2 hover:bg-black hover:text-white transition duration-200">
              ADD TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
