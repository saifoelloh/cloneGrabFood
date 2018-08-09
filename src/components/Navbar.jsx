import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

const Navbar = () => {
    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                rightContent={[<Icon key="1" type="ellipsis" />]}>
                Grab Food
            </NavBar>
        </div>
    );
};

export default Navbar;
