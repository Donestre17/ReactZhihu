import React, { Component } from 'react';
require('./style/tabs.css')
export default class Tabs extends Component {
    render(){
        return (
            <nav className="tabs">
                <div className="tab"> 全部 </div>
                <div className="tab"> 全部 </div>
                <div className="tab"> 全部 </div>
                <div className="tab"> 全部 </div>
                <div className="tab"> 全部 </div>
            </nav>
        )
    }
}