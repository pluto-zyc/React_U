import React, { Component } from 'react'
// css和图片
import './Index.css'
import 'antd-mobile/dist/antd-mobile.css';
import home_hig from '../../assets/img/tab_home_hig.png'
import home_nor from '../../assets/img/tab_home_nor.png'
import mine_hig from '../../assets/img/tab_me_hig.png'
import mine_nor from '../../assets/img/tab_me_nor.png'
import cate_hig from '../../assets/img/tab_menu_hig.png'
import cate_nor from '../../assets/img/tab_menu_nor.png'
import shop_hig from '../../assets/img/tab_shopping_hig.png'
import shop_nor from '../../assets/img/tab_shopping_nor.png'
// 出口路由
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
// 底部导航组件
import Home from '../Home/Home'
import Cate from '../Cate/Cate'
import Shop from '../Shop/Shop'
import Mine from '../Mine/Mine'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            footer: [
                {
                    text: '首页',
                    pic_hig: home_hig,
                    pic_nor: home_nor,
                    path:'/index/home'
                },
                {
                    text: '分类',
                    pic_hig: cate_hig,
                    pic_nor: cate_nor,
                    path:'/index/cate'
                },
                {
                    text: '购物车',
                    pic_hig: shop_hig,
                    pic_nor: shop_nor,
                    path:'/index/shop'
                },
                {
                    text: '我的',
                    pic_hig: mine_hig,
                    pic_nor: mine_nor,
                    path:'/index/mine'
                }
            ]
        }
    }
    select(e, index) {

    }
    render() {
        const {pathname} = this.props.location
        return (
            <div className='Index'>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/cate' component={Cate}></Route>
                    <Route path='/index/shop' component={Shop}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                </Switch>
                <footer>
                    {
                        this.state.footer.map((item) => {
                            return (
                                <div key={item.text} onClick={(e) => this.select(e, index)}>
                                    <img src={
                                        pathname===item.path?item.pic_hig:item.pic_nor
                                    } alt="" />
                            <NavLink activeClassName='select' to={item.path}>{item.text}</NavLink>
                                </div>
                            )
                        })
                    }
                </footer>
            </div>
        )
    }
}
