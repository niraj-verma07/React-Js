import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from "../Components/Home";
import Product from "../Components/Product";
import Service from "../Components/Service";
import About from "../Components/About";
import ProductDetails from "../Components/ProductDetails";
import ServiceDetails from "../Components/ServiceDetails";
import ServiceUpdate from "../Components/ServiceUpdate";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetails />} />
        <Route path="/service/update" element={<ServiceUpdate />} />
      </Route>
      {/* Service ke andar hi service details  open ho jayegi aur iske liye <Outlet> use karna padta hai details wale components me*/}

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
