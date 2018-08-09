import React, {Component} from 'react';
import {SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';

export default class CariBar extends Component {
    state = {
        value: 'Search',
    };
    onChange = value => {
        this.setState({value});
    };
    clear = () => {
        this.setState({value: ''});
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    };
    render() {
        return (
            <div>
                <SearchBar placeholder="Any cravings?" maxLength={8} />
                <WhiteSpace />
            </div>
        );
    }
}
