import React, { Component } from 'react';
import Card from './uComponents/Card';
import Loading from './uComponents/Loading'

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
            load:true
        }
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                height:document.documentElement.clientHeight - this.refs.i.offsetTop
                
            })
        });


        axios.get('/api/theme?id='+this.state.id)
        .then((res)=>{
            console.log(res.data.content)
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
    render(){
        let { title, pic, authors, items, height,load } = this.state;
        return (
            <div ref="i" className="themeDetail" style={{height:height+'px'}}>
                {
                    load&&<Loading/>
                }
                <div className="scroll-wrap">
                    <div className="banner" style={{backgroundImage:`url(${pic})`}}>
                        <h3>
                            <span>{title}</span>
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
                                console.log(item)
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