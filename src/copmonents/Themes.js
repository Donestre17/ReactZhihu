import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loading from './uComponents/Loading'

import axios from 'axios'

require('./style/themes.css')
export default class Themes extends Component {
    constructor(props){
        super(props)
        this.state = {
            height:0,
            data:[],
            load:true
        }
    }
    componentWillMount() {
        //缓存数据
        let data = JSON.parse(sessionStorage.getItem('themesData'))
        this.setState({
            data,
            load:false
        })
    }
    componentDidMount() {
        //设置内容容器初始高度
        console.log(this.state.data)
        setTimeout(()=> {
            this.setState({
                height:document.documentElement.clientHeight - this.refs.wrap.offsetTop
            })
        });
        //请求内容
        if(!sessionStorage.getItem('themesData')){
            axios.get('/api/themes')
            .then((res)=>{
                this.setState({
                    data:res.data.content.others,
                    load:false
                })
                sessionStorage.setItem('themesData',JSON.stringify(res.data.content.others))
            })
        }
    }
    render(){
        let items = this.state.data||[];
        let load = this.state.load;
        return (
            <div
            ref="wrap" style={{height:this.state.height+'px'}} className="theme-box">
            {/*loading页*/}
                {
                    load&&<Loading/>
                }
                <div 
                 className="inner-con">
                    
                    {
                        items.map((item)=>{
                            return (
                                <div key={item.id} className="theme-card">
                                    <img src={item.thumbnail}/>
                                    <Link to={'/theme/'+item.id} className="mask">
                                        <span>{item.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}