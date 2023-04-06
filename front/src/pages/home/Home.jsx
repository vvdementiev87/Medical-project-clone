import React from 'react';
import TopSection from "../../components/TopSection/TopSection";
import News from "../../components/News/News";
import Sources from "../../components/Sources/Sources";
import ConfAndSeminars from "../../components/ConfAndSeminars/ConfAndSeminars";
import CentersSliderList from "../../components/CentersSliderList/CentersSliderList";


const Home = () => {
    return (
        <div>
            <TopSection/>
            <News/>
            <CentersSliderList/>
            <ConfAndSeminars/>
            <Sources/>
        </div>
    );
};

export default Home;