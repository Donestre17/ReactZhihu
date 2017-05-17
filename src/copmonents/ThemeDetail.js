import React, { Component } from 'react';
import Card from './uComponents/Card';
import Loading from './uComponents/Loading'

import Storage from '../storage.js';


import axios from 'axios'

require('./style/themeDetail.css')
export default class ThemeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            title:'',
            pic:'',
            authors:[],
            items:[],
            height:0,
            load:true,
            likes:Storage.get('themes')||[],
            isLike:true
        }
        this.toggleLike = this.toggleLike.bind(this)
    }
    componentDidMount() {

        let idArr = this.state.likes.map((e)=>{
            if(e.id){
                return e.id
            }
        })
        let bol = idArr.indexOf(this.state.id)>=0
        this.setState({
            isLike:bol
        })

        setTimeout(()=> {
            this.setState({
                height:document.documentElement.clientHeight - this.refs.i.offsetTop
                
            })
        });


        axios.get('/api/theme?id='+this.state.id)
        .then((res)=>{
            let content = res.data.content
            this.setState({
                title:content.name,
                pic:content.background,
                authors:content.editors,
                items:content.stories,
                load:false
            })
        })
    }
    toggleLike(){
        this.setState({
            isLike:!this.state.isLike
        },()=>{
            if(!Storage.get('themes')){
                Storage.set('themes',[])
            }
            if(this.state.isLike){
                Storage.save('themes',{
                    name:this.state.title,
                    id:this.state.id
                })
            }else{
                Storage.delet('themes',this.state.id)
            }
        })
    }
    render(){
        let { title, pic, authors, items, height, load, isLike } = this.state;
        
        return (
            <div ref="i" className="themeDetail" style={{height:height+'px'}}>
                {
                    load&&<Loading/>
                }
                <div className="scroll-wrap">
                    <div className="banner" style={{backgroundImage:`url(${pic})`}}>
                        <h3>
                            <span>{title}</span>
                            <i className="fa fa-heart"
                            style={{
                                color:isLike?'#ff4081':'#ccc'
                            }}
                            onTouchTap={this.toggleLike}></i>
                        </h3>
                        
                    </div>
                    <div className="author-box">                       
                        <span>主编:</span>
                        {
                            authors.map((item)=>{
                                return (
                                    <div key={item.id} className="author-info">
                                        <img src={item.avatar}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="theme-con">
                        {
                            items.map((item)=>{
                                return (
                                    <Card key={item.id} info={{
                                        id:item.id,
                                        title:item.title,
                                        images:item.images||[''],
                                    }} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}