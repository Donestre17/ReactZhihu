import React, { Component } from 'react';
import Swiper from 'swiper'
import { Link } from 'react-router-dom'

require('./style/slider.css')
require('./style/swiper.min.css')

export default class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            loadCount:0
        }
        this.loaded = this.loaded.bind(this)
    }
    componentDidMount() {
        
    }
    componentDidUpdate(prevProps, prevState) {
        var slider = this.refs.slider; 
        var mySwiper;
        mySwiper = new Swiper (slider, {
            autoplay: 2000,
            loop: true,
            pagination : '.swiper-pagination',
            paginationType : 'bullets',
            paginationClickable :true,
        }) 
    }
    componentWillUnmount() {
        console.log('destory')
    }
    loaded(){
        this.setState({
            loadCount:++this.state.loadCount
        })
    }
    render(){
        let { topStories } = this.props;
        
        return (
            <div className="swiper-container" ref="slider">
                <div className="swiper-wrapper">
                    {
                        topStories.map((item)=>{
                            return (
                                <div key={item.id} className="swiper-slide">
                                    <img src={item.image} onLoad={this.loaded}/>
                                    <h3>{item.title}</h3>
                                    <Link to={"/page/"+item.id}></Link>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
        )
    }
}