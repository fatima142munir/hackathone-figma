import Explore from "./components/explore";
import Hero from "./components/hero";
import Logos from "./components/logos";
import OurProducts from "./components/ourProducts";
import Products from "./components/products";
import TopCategory from "./components/topcat";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Products />
      <TopCategory />
      <Explore />
      <OurProducts/>
      <Products/>
      <Products/>
    </>
  );
}
