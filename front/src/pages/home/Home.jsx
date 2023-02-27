import React from 'react';
import TopSection from "../../components/TopSection/TopSection";
import Courses from "../../components/Courses/Courses";
import News from "../../components/News/News";
// import Courses from "../../Components/Courses/Courses";
// import News from "../../Components/News/News";
// import Sources from "../../Components/Sources/Sources";


const Home = () => {
    return (
        <div>
           <TopSection/>
            <Courses/>
            <News/>
            {/*<Sources/>*/}
        </div>
    );
};

export default Home;