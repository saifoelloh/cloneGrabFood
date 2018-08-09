import React, {Component} from 'react';
import Navbar from './components/Navbar.jsx';
import TabsBar from './components/Tabs.jsx';
import CarouselBar from './components/Carousel.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <TabsBar />
            </div>
        );
    }
}

export default App;
