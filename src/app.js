import React , { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'

//移动端适配，1rem=75px
import mobile from './mobile';
//事件插件
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
//组件
import Header from './copmonents/Header'
import List from './copmonents/List'
import Tabs from './copmonents/Tabs'
import Content from './copmonents/Content'
import Themes from './copmonents/Themes'
import Page from './copmonents/Page'
//样式重置
require('normalize.css')
require('font-awesome/css/font-awesome.css')
require('./app.css')


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:false,
        }
        this.listShow = this.listShow.bind(this)
    }
    componentDidMount() {
        mobile();

        //解决盗链问题，为header添加<meta name="referrer" content="never">
        var header = document.getElementsByTagName('header')[0]
        var meta = document.createElement('meta');
        meta.setAttribute('name','referrer');
        meta.setAttribute('content','never');
        header.appendChild(meta)
    }
    listShow(){
        this.setState({
            list:!this.state.list
        })
    }
    render(){
        return (
                <Router>
                    <div className='wrap'>
                        {/*<Header listShow={this.listShow}/>*/}
                        <Route path="/" component={Header}/>
                        <Route exact path="/" component={Tabs}/>
                        <Route exact path="/" component={Content}/>
                        <Route path="/themes" component={Themes}/>
                        <Route path="/page/:id" component={Page}/>
                    </div>
                </Router>
        )
    }
}

render(
    <App />,
    document.body
)