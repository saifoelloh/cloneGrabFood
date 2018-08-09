import React, {Component} from 'react';
import CariBar from './Searchbar.jsx';
import CarouselSlide from './Carousel.jsx';

export default class Tabs2 extends Component {
    render() {
        return (
            <div>
                <CariBar />
                <CarouselSlide />
            </div>
        );
    }
}
