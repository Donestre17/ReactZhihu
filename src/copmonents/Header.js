import React, { Component } from 'react';
require('./style/header.css')
export default class Header extends Component {
    render(){
        return (
            <header>
                <button className="list"><i className="fa fa-bars"></i></button>
                <h1 className="hd-info">知乎日报</h1>
                <button className="search"><i className="fa fa-search"></i></button>
            </header>
        )
    }
}