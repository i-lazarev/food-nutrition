import React from 'react';
import MostSeen from './MostSeen';
import AllFood from './AllFood';
import Search from './Search';


const HomePage = (props) => {

    return (
        <div >
            <Search />
            <MostSeen />
            <AllFood />
        </div>
    );
}

export default HomePage;


