import React from 'react';
import SlideShow from './SlideShow';
import MostSeen from './MostSeen';
import Search from './Search';
import Categories from './Categories';

const HomePage = (props) => {

    return (
        <div>
            <Search />
            <SlideShow />
            <MostSeen />
            <Categories/>
        </div>
    );
}

export default HomePage;


