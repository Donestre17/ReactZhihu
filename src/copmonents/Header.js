import React, { Component } from 'react';
require('./style/header.css')
import ListControl from './ListControl'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    //触发父组件点击切换事件
    back(){
        window.history.back();
    }
    render(){
        console.log(this.props)
        let {pathname} = this.props.location
        let back = this.back
        return (
            <header>
                {
                    pathname==='/'
                    ?<ListControl/>
                    :<button className="back" onTouchTap={back}><i className="fa fa-angle-left"></i></button>
                }
                
                <h1 className="hd-info">知乎日报</h1>
                
            </header>
        )
    }
}