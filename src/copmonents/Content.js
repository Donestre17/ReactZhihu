import React, { Component } from 'react';
import Slider from './uComponents/Slider';
import Card from './uComponents/Card'

import iScroll from 'iscroll/build/iscroll-probe'
import IScroll from 'react-iscroll'

require('./style/content.css')
export default class Content extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    };
    update(){
        console.log('update!!')
    };
    scroll(e){
        if(e.y > 0){
            console.log('top!!')
        }
        if(e.maxScrollY >= e.y){
            console.log('end!!')
        }
    };
    loadMore(){
        
    }
    render(){
        return (
            <IScroll 
            iScroll={iScroll} 
            options={{
                probeType:2
            }}
            onRefresh={this.update.bind(this)} 
            onScroll={this.scroll.bind(this)}
            className="content-box" 
            id="scroll">
                <div className="content-wrap" ref='scrollCon'>
                    <Slider/>
                    <ul className="news-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </ul>
                </div>
            </IScroll>
        )
    }
}