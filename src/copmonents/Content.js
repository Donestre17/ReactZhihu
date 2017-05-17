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
            loadDate:Number(sessionStorage.getItem('flag'))||(new Date().getDate())
        }
        this.getNews = this.getNews.bind(this)
    }
    componentWillMount() {
        let content = JSON.parse(sessionStorage.getItem('content'));
        let topStories = JSON.parse(sessionStorage.getItem('topStories'));
        this.setState({
            content,
            topStories,
            load:false,
            onoff:true
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
            //请求新内容与旧有内容判断去重
            let oldContent = this.state.content;
            if(oldContent){
                for(var i = 0;i<content.length;i++){
                    for(var j = 0;j<oldContent.length;j++){
                        if(content[i].id == oldContent[j].id ){
                            content.splice(i,1)
                            i--
                            break;
                        }
                    }
                }
            }
            this.setState({
                topStories:res.data.content.top_stories,
                content:oldContent?content.concat(oldContent):content,
                load:false
            })
            content = this.state.content
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
        if( e.y <= e.maxScrollY-120 ){
            //加载之前内容
            if(this.state.onoff){
                this.setState({
                    onoff:false
                })
                var day = this.state.loadDate
                var date = new Date(new Date().setDate(day - 1))
                var flag = new String(date.getFullYear())
                + (new String(date.getMonth()+1).length==2?(new String(date.getMonth()+1)):('0' + new String(date.getMonth()+1))) 
                + (new String(date.getDate()).length==2?(new String(date.getDate())):('0' + new String(date.getDate())))
                console.log(flag)
                axios.get('/api/before?d='+flag)
                .then((res)=>{
                    console.log(res.data.content)
                    this.setState({
                        content:this.state.content.concat(res.data.content),
                        loadDate:this.state.loadDate - 1
                    })
                    let content = this.state.content
                    let day = this.state.loadDate
                    sessionStorage.setItem('flag',String(day))
                    sessionStorage.setItem('content',JSON.stringify(content))
                    setTimeout(()=> {
                        this.setState({
                            onoff:true
                        })
                    }, 5000);
                })
            }
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