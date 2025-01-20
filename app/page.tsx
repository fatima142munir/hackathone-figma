import Explore from "./components/explore";
import FeaturedProducts from "./components/featuredProducts";
import Hero from "./components/hero";
import Logos from "./components/logos";
import OurProducts from "./components/ourProducts";
import Products from "./components/products";
import TopCategory from "./components/topcat";

export default function Home() {
  return (
    <>
      <div className="container m-auto">
        <Hero />
        <Logos />
        <h2 className="text-3xl font-bold mt-20 ml-8">Featured Products</h2>
        <FeaturedProducts/>
        <TopCategory />
        <Explore />
        <OurProducts />
        <Products />
      </div>
    </>
  );
}
