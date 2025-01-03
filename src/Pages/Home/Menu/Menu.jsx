import SectionTitle from "../../../components/SectionTitle";
import MenuCard from "../../Shared/MenuCard";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const Menu = () => {
  // const [menuItems, setMenuItems] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenuItems(data.slice(0, 6));
  //     });
  // }, []);
  const [menu] = useMenu();
  const menuItems = menu.slice(0, 6);
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
      <Link className="flex justify-center my-5">
        <button className="btn bg-[#E8E8E8] text-yellow-500 border-b-yellow-500 border-2 hover:bg-black hover:text-white transition duration-200">
          Order Now
        </button>
      </Link>
    </section>
  );
};

export default Menu;
