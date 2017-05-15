import React, { Component } from 'react';

require('./style/ListControl.css')

import List from './List'

export default class ListControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:false,
            first:false
        }
        this.listShow = this.listShow.bind(this)
    }
    listShow(){
        console.log(1)
        console.log(this)
        this.setState({
            list:!this.state.list,
            first:true
        })
    }
    render(){
        return (
            <button className="list" onTouchTap={this.listShow}>
                <i className="fa fa-bars"></i>
                <List list={this.state.list} listShow={this.listShow} first={this.state.first}/>
            </button>
        )
    }
}