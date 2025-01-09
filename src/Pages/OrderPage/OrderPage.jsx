import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../Shared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const index = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(index);
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCoverImg} title="order food"></Cover>
      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase flex sm:flex-row flex-col justify-center items-center">
            <Tab>salads</Tab>
            <Tab>pizzas</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderPage;
