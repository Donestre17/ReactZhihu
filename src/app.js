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
//样式重置
require('normalize.css')
require('font-awesome/css/font-awesome.css')
require('./app.css')


class App extends Component {
    componentDidMount() {
        mobile()
    }
    render(){
        return (
                <Router>
                    <div className='wrap'>
                        <Header/>
                        <List/>
                        <Route exact path="/" component={Tabs}/>
                        <Route exact path="/" component={Content}/>
                    </div>
                </Router>
        )
    }
}

render(
    <App />,
    document.body
)