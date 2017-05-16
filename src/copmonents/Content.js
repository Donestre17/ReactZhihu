import React, { Component } from 'react';
import Slider from './uComponents/Slider';
import Card from './uComponents/Card';
import Loading from './uComponents/Loading'

import iScroll from 'iscroll/build/iscroll-probe'
import IScroll from 'react-iscroll'

import axios from 'axios'

require('./style/content.css')
export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[],
            topStories:[],
            load:true,
            topGap:0,
        }
        this.getNews = this.getNews.bind(this)
    }
    componentWillMount() {
        let content = JSON.parse(sessionStorage.getItem('content'));
        let topStories = JSON.parse(sessionStorage.getItem('topStories'));
        this.setState({
            content,
            topStories,
            load:false
        })
    }
    componentDidMount() {
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        let content = JSON.parse(sessionStorage.getItem('content'));
        let topStories = JSON.parse(sessionStorage.getItem('topStories'))
        if(!content||!topStories){
            
            this.getNews()
        }
    };
    getNews(){
        this.setState({
            load:true
        })
        axios.get('/api/news')
        .then((res)=> {
            let content = res.data.content.stories;
            let topStories = res.data.content.top_stories;
            this.setState({
                topStories:res.data.content.top_stories,
                content:content,
                load:false
            })
            sessionStorage.setItem('content',JSON.stringify(content))
            sessionStorage.setItem('topStories',JSON.stringify(topStories))
        })
    }
    update(){
        console.log('update!!')
    };
    scroll(e){
        if(e.y > 120){
            this.getNews()
            console.log('refresh')
        }
        if(e.maxScrollY >= e.y){
            console.log('btn!!')
        }
    };
    loadMore(){
        
    }
    render(){
        let topStories = this.state.topStories||[];
        let content = this.state.content||[];
        let load = this.state.load;
        
        if(load){
            return (<Loading/>)
        }else{
            return (
                <IScroll 
                    iScroll={iScroll} 
                    options={{
                    probeType:2
                    }}
                    onRefresh={this.update.bind(this)} 
                    onScroll={this.scroll.bind(this)}
                    className="content-box" 
                    id="scroll"
                >
                    <div className="content-wrap">
                        <div className="refresh-bar">
                            刷新
                        </div>
                        <Slider topStories={topStories}/>
                        <ul className="news-list" >
                            {
                                content.map((item)=>{
                                    return (<Card key={item.id} info={item}/>)
                                })
                            }
                        </ul>
                        <div className="load-bar">
                            加载更多
                        </div>
                    </div>
                </IScroll>
            )
        }
    }
}