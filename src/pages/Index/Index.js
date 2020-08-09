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
import {NavLink,Switch, Route,Redirect} from 'react-router-dom'
// 底部导航组件
import Home from '../Home/Home'
import Cate from '../Cate/Cate'
import Shop from '../Shop/Shop'
import Mine from '../Mine/Mine'

export default class index extends Component {
    select(e,index) {
       
    }
    render() {
        return (
            <div className='Index'>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/cate' component={Cate}></Route>
                    <Route path='/index/shop' component={Shop}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                </Switch>
                <footer>
                    <div onClick={(e)=>this.select(e,index)}>
                        <img ref='pic1' src={home_nor} alt="" />
                        <NavLink activeClassName='select' to="/index/home">首页</NavLink>
                    </div>
                    <div onClick={this.select.bind(this,index)}>
                        <img ref='pic2' src={cate_nor} alt="" />
                        <NavLink activeClassName='select' to="/index/cate">分类</NavLink>
                    </div>
                    <div onClick={this.select.bind(this,index)}>
                        <img ref='pic3' src={shop_nor} alt="" />
                        <NavLink activeClassName='select' to="/index/shop">购物车</NavLink>
                    </div>
                    <div onClick={this.select.bind(this,index)}>
                        <img ref='pic4' src={mine_nor} alt="" />
                        <NavLink activeClassName='select' to="/index/mine">我的</NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}
