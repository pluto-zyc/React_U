import React, { Component } from 'react'
import news from '../../assets/img/news.png'
import set from '../../assets/img/set.png'
import aixin from '../../assets/img/keep.png'
import qian from '../../assets/img/icon_refund.png'
import touxiang from '../../assets/img/touxiang.jpg'
import './Mine.css'
export default class Mine extends Component {
    constructor(){
        super()
        this.state={
            user:sessionStorage.getItem('name')
        }
    }
    render() {
        return (
            <div className='Mine'>
               <div className="top">
                   <b>
                       <img src={set} alt=""/>
                   </b>
                   <span>
                       个人中心
                   </span>
                   <b>
                       <img src={news} alt=""/>
                   </b>
               </div>
            <div className="mines">
               <div className="my_pic">
                   <div className="touxiang">
                   <img src={touxiang} alt=""/>
                   </div>
                   {
                       this.state.user?(
                       <span>{this.state.user}</span>
                       ):null
                   }
               </div>
               <div className="my_shoucang">
                   <img src={aixin} alt=""/>
                   <h3>我的收藏(2)</h3>
               </div>
            </div>
            <div className="mine_list">
                <span>我的订单</span>
                <b>查看订单</b>
            </div>
        <ul className="fahuo">
            <li>
                <img src={qian} alt=""/>
                <span>
                    待发货
                </span>
            </li>
            <li>
                <img src={qian} alt=""/>
                <span>
                    待发货
                </span>
            </li>
            <li>
                <img src={qian} alt=""/>
                <span>
                    待发货
                </span>
            </li>
            <li>
                <img src={qian} alt=""/>
                <span>
                    待发货
                </span>
            </li>
            <li>
                <img src={qian} alt=""/>
                <span>
                    待发货
                </span>
            </li>
        </ul>
            <div className="address">
                <span>收货地址管理</span>
            </div>
            </div>
        
        )
    }
}
