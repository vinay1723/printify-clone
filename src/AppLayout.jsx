import Header from "./UI/Header";
import Hero from "./UI/Hero";
import Services from "./components/Services";
import Products from "./UI/Products";
import Details from "./UI/Details";
import Brands from "./UI/Brands";
import Cta from "./UI/Cta";
import Reviews from "./UI/Reviews";
import Working from "./UI/Working";
import Media from "./UI/Media";
import Explore from "./UI/Explore";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="w-svw xl:place-content-center xl:flex xl:flex-col xl:items-center xl:justify-center">
        <Hero />
        <Services />
        <Products />
        <Details />
        <Brands />
        <Cta />
        <Reviews />
        <Working />
        <Media />
        <Explore />
      </main>
    </div>
  );
}

export default AppLayout;
