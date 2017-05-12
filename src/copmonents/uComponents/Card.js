import React, { Component } from 'react';
require('./style/card.css')
export default class Card extends Component {
    constructor(props){
        super(props)
        // this.touch = ()=>{
        //     console.log(this)
        // }
    };
    touch(){
        console.log(this)
    }
    render(){
        return (
            <li className="news-card" onTouchTap={this.touch.bind(this)}>
                <h3 className="title">这是一个标题啊啊啊啊啊啊啊啊啊这是一个标题啊啊啊啊啊啊啊啊啊</h3>
                <a className="card-avatar" href="javascript:;"></a>
            </li>
        )
    }
}