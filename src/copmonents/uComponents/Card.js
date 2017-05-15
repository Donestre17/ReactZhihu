import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        let {info} = this.props
        console.log(info.images)
        return (
            <li className="news-card" onTouchTap={this.touch.bind(this)}>
                <h3 className="title">
                    <Link to={"/page/"+info.id}>
                        {info.title}
                    </Link>
                    </h3>
                <a className="card-avatar" href="javascript:;">
                    <img src={info.images[0]||''}/>
                </a>
            </li>
        )
    }
}