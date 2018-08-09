import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';

export default class CarouselBar extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    };
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    'https://sahabatnesia.com/wp-content/uploads/2017/11/6-8.jpg',
                    'https://sahabatnesia.com/wp-content/uploads/2017/11/9-8.jpg',
                    'https://sahabatnesia.com/wp-content/uploads/2017/11/15-7.jpg',
                ],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank style={{margin: 0}}>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) =>
                        console.log(`slide from ${from} to ${to}`)
                    }
                    afterChange={index => console.log('slide to', index)}>
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{
                                display: 'inline-block',
                                width: '100%',
                                height: this.state.imgHeight,
                            }}>
                            <img
                                src={val}
                                alt=""
                                style={{width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({imgHeight: 'auto'});
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
