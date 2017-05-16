import React, { Component } from 'react';

require('./style/loading.css')
export default class Loading extends Component {
    render(){
        return (
            <div className="loading">
                <div className="loading-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}