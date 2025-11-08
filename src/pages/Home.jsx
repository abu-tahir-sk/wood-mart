import CategoryGrid from "./CategoryGrid";
import FeaturedProducts from "./FeaturedProducts";
import InfoSection from "./InfoSection";
import MainBanner from "./MainBanner";
import MotionProductBannerSlider from "./MotionProductBannerSlider";


const Home = () => {
      return (
            <div>
                 <MainBanner/>
                 <CategoryGrid/>
                 <FeaturedProducts/>
                 <MotionProductBannerSlider/>
                 <InfoSection/>
            </div>
      );
};

export default Home;