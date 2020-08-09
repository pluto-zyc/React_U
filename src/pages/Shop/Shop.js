import React, { Component } from 'react'
import ComponentTitle from '../../component/Title/ComponentTitle'
import shop_home from '../../assets/img/store.png'
import jifen from '../../assets/img/jifen.png'
import Del from '../../component/Del/Del'
import './Shop.css'
import { connect } from "react-redux"
import { shops } from '../../store/index'
import { filterPrice } from '../../filters/Filters'
class Shop extends Component {
    constructor() {
        super()
        this.state = {
            showDel: false,
            shopList: [],
        }
    }
    componentDidMount() {

        this.setState({
            shopList: this.props.shops
        })
        console.log(this.props.shops);

    }
    showDel_cancel() {
        this.setState({
            showDel: true
        })
    }
    showDel_sure() {
        console.log('点了确认');
    }
    addClassName(e) {
        e.target.className += "move"
    }
    render() {
        return (
            <div className="Shop">
                {/* 头部导航 */}
                <div>
                    <ComponentTitle title="购物车"></ComponentTitle>
                </div>
                {/* 主体部分  ul */}
                {
                    this.state.shopList.length > 0 ? (this.state.shopList.map((item) => {
                        return (
                            <div key={item.id} className="wrap">
                                <div className="top" key={item.id}>
                                    <img src={shop_home} alt="" />
                                    <span>杭州保税区仓</span>
                                </div>

                                <div className="section">
                                    {/* 左边  选中 图片 */}
                                    <div className="left">
                                        <input type="checkbox" />
                                        <img src={item.img} alt="" />
                                    </div>
                                    {/* 中间价格 */}
                                    <div className="center">
                                        <h4>{item.goodsname}</h4>
                                        <div className="button">
                                            <span> - </span>
                                            <span> {this.state.shopList.length} </span>
                                            <span> + </span>
                                        </div>
                                        <b>总价：{item.price * this.state.shopList.length}</b>
                                    </div>
                                    <div className="right">
                                        ￥{item.price}
                                    </div>
                                    <span className="del">
                                        删<br />
                        除
                    </span>
                                </div>
                                <div className="bottom">
                                    <div className="all">
                                        <input type="checkbox" />
                                        <span>全选</span>
                                    </div>
                                    <div className="update">
                                        <input type="checkbox" />
                                        <span>编辑</span>
                                    </div>
                                    <div className="num">
                                        合计:110.00
                        </div>
                                    <div className="sum">
                                        去结算
                        </div>
                                </div>
                            </div>
                        )
                    })) : null
                }
                {/* 确认删除 吗是否删除 */}
                {
                    this.state.showDel ? (
                        <Del onCancel={this.showDel_cancel.bind(this)} onSure={this.showDel_sure.bind(this)} ></Del>
                    ) : null
                }
            </div>
        )
    }
}
export default connect((state) => {
    console.log(state)
    return {
        shops: shops(state)
    }
})(Shop)
