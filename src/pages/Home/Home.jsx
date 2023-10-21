import { useEffect, useState } from "react";
import Brands from "./Brands/Brands";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Header from "./Header/Header";
import SloganBanner from "./SloganBanner/SloganBanner";
import WhatTheySay from "./WhatTheySay/WhatTheySay";

const Home = () => {
 const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'false');

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    const bodyStyle = {
        backgroundColor: isDarkMode ? '#262626' : '#fff',
        color: isDarkMode ? '#fff' : '#262626'
    };

    return (
        <div style={bodyStyle}>
            <button onClick={toggleMode} className="w-8 absolute right-16 top-8">
                <h1>Change Theme</h1>
            </button>
            <Header></Header>
            <div>
                <Brands></Brands>
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div>
                <SloganBanner></SloganBanner>
                <WhatTheySay></WhatTheySay>
            </div>
        </div>
    );
};

export default Home;