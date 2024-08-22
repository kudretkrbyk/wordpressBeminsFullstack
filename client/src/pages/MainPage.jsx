import Categories from "../components/MainPageComps/Categories";
import ShopNow from "../components/MainPageComps/ShopNow";

import Testimonials from "../components/MainPageComps/Testimonials";
import HomeSlider from "../components/MainPageComps/HomeSlider";
import Instagram from "../components/MainPageComps/Instagram";
import Banner from "../components/MainPageComps/Banner";
import BestSellers from "../components/MainPageComps/BestSellers";

export default function MainPage() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <Banner></Banner>
      <Categories></Categories>
      <ShopNow></ShopNow>
      <BestSellers></BestSellers>
      <Testimonials></Testimonials>
      <Instagram></Instagram>
    </div>
  );
}
