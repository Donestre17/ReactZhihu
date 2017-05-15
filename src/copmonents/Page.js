import React, { Component } from 'react';

import axios from 'axios'

require('./style/page.css')
export default class Page extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            image:'',
            body:'',
            loading:true,
            height:0
        }
        this.loaded = this.loaded.bind(this)
    }
    componentDidMount() {
        setTimeout(()=> {
            console.log(document.documentElement.clientHeight , this.refs.i.offsetTop)
            this.setState({
                height:document.documentElement.clientHeight - this.refs.i.offsetTop
                
            })
        }, 300);
        //根据id请求文章内容
        let url = '/api/page?id=' + this.props.match.params.id
        axios.get(url)
        .then((res)=>{
            let { title ,image ,body} = res.data.content;
            this.setState({
                title,
                image,
                body,
                loading:false
            })
        })
    }
    loaded(){
    }
    render(){
        let { title ,image ,body ,loading} = this.state;
        
        if(!loading){
            return (
                <div ref="i" className="page" style={{height:this.state.height + 'px'}}>
                    <div ref="wrap" className="scroll-wrap">
                        <div className="title-pic">
                            <img onLoad={this.loaded} src={image}/>
                            <div className="mask"></div>
                        </div>
                        <div className="page-con">
                            <h3 className="title">{title}</h3>
                            <div  className='main' dangerouslySetInnerHTML={{__html:body}}>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (<div></div>)
        }
    }
}