import React, { Component } from 'react';
require('./style/list.css')

export default class List extends Component {
    render(){
        return (
            <div className="list-mask">
                <ul className="list">
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