import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="feature-item my-10 py-10 text-white">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-4 px-4  md:py-20 md:px-36 space-x-4 text-white">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-2">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Discover the artistry of our chef-crafted delicacies. Fresh
            ingredients, bold flavors, and impeccable presentation combine to
            create an unforgettable dining experience.
          </p>
          <button className="btn btn-outline text-white">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
