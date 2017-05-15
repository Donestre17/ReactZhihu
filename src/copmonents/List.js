import React, { Component } from 'react';
require('./style/list.css')

export default class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            height:null,
            width:null,
        }

        this.listCancelBubble = this.listCancelBubble.bind(this)
        this.listShow = this.listShow.bind(this)
    }
    //触发父组件点击切换事件
    listShow(ev){
        console.log(2)
        ev.stopPropagation();
        // this.refs.mask.style.display='block';//解决应用第一次进入的动画问题
        this.props.listShow();
    }
    //为列表取消冒泡
    listCancelBubble(ev){
        ev.stopPropagation();
        
    }
    componentDidMount() {
        //获取屏幕宽高
        let height = document.documentElement.clientHeight;
        let width = document.documentElement.clientWidth;
        let ratio = window.devicePixelRatio;
        this.setState({
            height:height*ratio,
            width:width*ratio
        })
    }
    render(){
        return (
                <div 
                style={{height:this.state.height+'px',width:this.state.width+'px',display:this.props.first?'block':'false'}}
                className={this.props.list?'list-mask show':'list-mask hide'}
                onTouchTap={this.listShow}>
                    <ul 
                    className={this.props.list?'list show':'list hide'}
                    onTouchTap={this.listCancelBubble}
                    >
                        <li className="list-item list-hd">
                            <a className="user" href="javascript:;">
                                <img className="avater"/>
                            </a>
                        </li>
                    </ul>
                </div>
        )
    }
}