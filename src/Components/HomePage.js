import React from 'react';
import MostSeen from './MostSeen';
import AllFood from './AllFood';
import Search from './Search';
import Categories from './Categories';


const HomePage = (props) => {

    return (
        <div >
            <Search />
            <MostSeen />
            <AllFood />
            <Categories/>
        </div>
    );
}

export default HomePage;


