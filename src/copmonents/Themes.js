import React, { Component } from 'react';

require('./style/themes.css')
export default class Themes extends Component {
    constructor(props){
        super(props)
        this.state = {
            height:0
        }
        this.loaded = this.loaded.bind(this)
    }
    componentDidMount() {
        //设置内容容器初始高度
        setTimeout(()=> {
            this.setState({
                height:document.documentElement.clientHeight - this.refs.wrap.offsetTop
            })
        }, 300);
    }   
    loaded(){
    }
    render(){
        return (
            <div
            ref="wrap" style={{height:this.state.height+'px'}} className="theme-box">
                <div 
                 className="inner-con">
                    <div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div>
                    <div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div><div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div><div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div><div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div><div className="theme-card">
                        <img src=''/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div><div className="theme-card">
                        <img src='http://pic3.zhimg.com/91125c9aebcab1c84f58ce4f8779551e.jpg' onLoad={this.loaded}/>
                        <a href="javascript:;" className="mask">
                            <span>标题</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}