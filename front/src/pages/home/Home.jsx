import React from 'react';
import TopSection from "../../components/TopSection/TopSection";
import Courses from "../../components/Courses/Courses";
import News from "../../components/News/News";
import Sources from "../../components/Sources/Sources";



const Home = () => {
    return (
        <div>
           <TopSection/>
            <Courses/>
            <News/>
            <Sources/>
        </div>
    );
};

export default Home;