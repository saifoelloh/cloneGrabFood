import React, {Component} from 'react';
import CariBar from './Searchbar.jsx';
import CarouselSlide from './Carousel.jsx';
import ListItem from './ListItem.jsx';
import Aux from '../hoc/Auxilary.jsx';

export default class Tabs2 extends Component {
    state = {
        foods: [
            {
                image:
                    'https://makassar.terkini.id/aset/images/sites/2/2018/05/Sate-Ayam-rajakuliner-com.jpg',
                title: 'Sate Ayam',
                zone: 'Indonesia',
            },
            {
                image:
                    'https://makassar.terkini.id/aset/images/sites/2/2018/05/Sate-Ayam-rajakuliner-com.jpg',
                title: 'Sate Ayam',
                zone: 'Indonesia',
            },
            {
                image:
                    'https://makassar.terkini.id/aset/images/sites/2/2018/05/Sate-Ayam-rajakuliner-com.jpg',
                title: 'Sate Ayam',
                zone: 'Indonesia',
            },
            {
                image:
                    'https://makassar.terkini.id/aset/images/sites/2/2018/05/Sate-Ayam-rajakuliner-com.jpg',
                title: 'Sate Ayam',
                zone: 'Indonesia',
            },
        ],
    };
    render() {
        console.log(this.state.foods);
        return (
            <div>
                <CariBar />
                <CarouselSlide />
                <div>
                    <ListItem data={this.state.foods} />
                </div>
            </div>
        );
    }
}
