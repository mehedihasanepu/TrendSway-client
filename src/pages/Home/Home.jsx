import Brands from "./Brands/Brands";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Header from "./Header/Header";
import SloganBanner from "./SloganBanner/SloganBanner";
import WhatTheySay from "./WhatTheySay/WhatTheySay";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brands></Brands>
            <FeaturedProducts></FeaturedProducts>
            <SloganBanner></SloganBanner>
            <WhatTheySay></WhatTheySay>
        </div>
    );
};

export default Home;