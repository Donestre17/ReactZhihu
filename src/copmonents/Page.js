import React, { Component } from 'react';
import Loading from './uComponents/Loading'
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
            height:0,
        }
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                height:document.documentElement.clientHeight - this.refs.i.offsetTop
                
            })
        });
        //根据id请求文章内容
        let url = '/api/page?id=' + this.props.match.params.id
        axios.get(url)
        .then((res)=>{
            let { title ,image ,body ,images ,theme} = res.data.content;
            this.setState({
                title,
                image:image||images||theme.thumbnail,
                body,
                loading:false
            })
        })
    }
    render(){
        let { title ,image ,body ,loading} = this.state;
            return (
                <div ref="i" className="page" style={{height:this.state.height&&(this.state.height + 'px')}}>
                    {
                        loading&&<Loading/>
                    }
                    <div ref="wrap" className="scroll-wrap">
                        <div className="title-pic">
                            <img src={image instanceof Array?image[0]:image}/>
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
    }
}