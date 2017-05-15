import React, { Component } from 'react';

import {Link} from 'react-router-dom'
require('./style/tabs.css')
export default class Tabs extends Component {
    render(){
        let href = window.location.pathname;
        return (
            <nav className="tabs">
                <div className={href==='/'?'tab active':'tab'}>
                    <Link to='/'>全部</Link>
                </div>
                <div className={href==='/themes'?'tab active':'tab'}>
                    <Link to='/themes'>专题</Link>
                </div>
            </nav>
        )
    }
}