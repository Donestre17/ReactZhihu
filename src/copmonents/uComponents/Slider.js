import React, { Component } from 'react';
import Swiper from 'swiper'

require('./style/slider.css')
require('./style/swiper.min.css')

export default class Slider extends Component {
    componentDidMount() {
        console.log(Swiper);
        var slider = this.refs.slider; 
        var mySwiper = new Swiper (slider, {
            autoplay: 3000,
            loop: true,
            pagination : '.swiper-pagination',
            paginationType : 'bullets',
            paginationClickable :true,
        })  
    }
    render(){
        return (
            <div className="swiper-container" ref="slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">1</div>
                    <div className="swiper-slide">2</div>
                    <div className="swiper-slide">3</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}