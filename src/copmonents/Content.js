import React, { Component } from 'react';
import Slider from './uComponents/Slider';
import Card from './uComponents/Card'

import iScroll from 'iscroll/build/iscroll-probe'
import IScroll from 'react-iscroll'

import axios from 'axios'

require('./style/content.css')
export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[],
            topStories:[]
        }
    }
    componentDidMount() {
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        axios.get('/api/news')
        .then((res)=> {
            this.setState({
                topStories:res.data.content.top_stories,
                content:res.data.content.stories
            })
        })
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
        let {topStories,content} = this.state
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
                    <Slider topStories={topStories}/>
                    <ul className="news-list">
                        {
                            content.map((item)=>{
                                return (<Card key={item.id} info={item}/>)
                            })
                        }
                    </ul>
                </div>
            </IScroll>
        )
    }
}