import React from 'react';
import {Tabs, WhiteSpace, Badge} from 'antd-mobile';
import Tabs2 from './Tabs2.jsx';

const tabs = [
    {title: <Badge>Transport</Badge>},
    {title: <Badge>Food</Badge>},
    {title: <Badge>Delivery</Badge>},
];

const TabsBar = () => {
    return (
        <div>
            <Tabs
                tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => {
                    console.log('onChange', index, tab);
                }}
                onTabClick={(tab, index) => {
                    console.log('onTabClick', index, tab);
                }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                        backgroundColor: '#fff',
                    }}>
                    Content of first tab
                </div>
                <div>
                    <Tabs2 />
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                        backgroundColor: '#fff',
                    }}>
                    Content of third tab
                </div>
            </Tabs>
            <WhiteSpace />
        </div>
    );
};

export default TabsBar;
