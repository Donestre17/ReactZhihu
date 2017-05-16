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
import ThemeDetail from './copmonents/ThemeDetail'
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
        var head = document.getElementsByTagName('head')[0]
        var meta = document.createElement('meta');
        meta.setAttribute('name','referrer');
        meta.setAttribute('content','never');
        head.appendChild(meta)
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
                        {/*头部，匹配所有*/}
                        <Route path="/" component={Header}/>
                        {/*选项卡*，匹配主页和专题页*/}
                        <Route exact path="/" component={Tabs}/>
                        <Route exact path="/themes" component={Tabs}/>
                        {/*主内容区域，匹配主页*/}
                        <Route exact path="/" component={Content}/>
                        {/*专题页，匹配专题页*/}
                        <Route path="/themes" component={Themes}/>
                        {/*专题详情页，匹配专题详情*/}
                        <Route path="/theme/:id" component={ ThemeDetail }/>
                        {/*文章页，匹配文章页*/}
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