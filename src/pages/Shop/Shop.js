import React, { Component } from 'react'
import ComponentTitle from '../../component/Title/ComponentTitle'
import shop_home from '../../assets/img/store.png'
import jifen from '../../assets/img/jifen.png'
import Del from '../../component/Del/Del'
import './Shop.css'
import { connect } from "react-redux"
import { shops, requestShopAction, changeGoodsChecked, isAllChecked, changeAllChecked, requestShopAddAction, shopAdd,allPrice} from '../../store/index'
import { filterPrice } from '../../filters/Filters'
import shop_none from "../../assets/img/tab_shopping_nor.png"
import { requestShopDel } from '../../util/request'
class Shop extends Component {
    constructor() {
        super()
        this.state = {
            showDel: false,//展示确认删除
            shopList: [],//商品列表
            move: '',//展示删除按钮
            isCheck: false,//编辑选中
            checkedShop: [],//商品选中
            id: 0,//删除请求参数
            allCheck: false,
            shopNum: 0
        }
    }
    componentDidMount() {
        const id = sessionStorage.getItem('uid')
         this.uid = {
            uid: id
        }
        // 请求列表
        this.props.requestShops(this.uid)
    }
    // 点击了取消
    showDel_cancel() {
        var wrap = document.querySelectorAll('.wrap')
        wrap.forEach((i) => {
            i.className = 'wrap'
        })
        this.setState({
            showDel: false,
            isCheck: false
        }, () => {
            console.log(this.state.isCheck);
        })

    }
    // 点击了确认
    showDel_sure(e) {
        console.log(e);
        this.setState({
            showDel: false
        })
        const id = {
            id: e
        }
        requestShopDel(id).then((res) => {
            const uuid = sessionStorage.getItem('uid')
            const params = {
                uid: uuid
            }
            this.props.requestShops(params)
        })
    }
    // 点击-号
    red(id) {
        let addId = {
            id: id,
            type: 1
        }
        this.props.changeShopAdd(addId)
        this.props.requestShops(this.uid)
    }
    // + 添加num个数
    add(id) {
        let addId = {
            id: id,
            type: 2
        }
        this.props.changeShopAdd(addId)
        this.props.requestShops(this.uid)
    }
    // 点击删除
    del(id) {
        this.setState({
            showDel: true,
            id: id
        })
    }
    // 点击勾选商品
    changeShopCheck(index, e) {
        this.props.addCheckAction(index, e.target.checked)
    }
    onChange() { }
    // 展示删除按钮
    addClassName(e) {
        var wrap = document.querySelectorAll('.wrap')
        if (this.state.isCheck === false) {
            this.setState({
                isCheck: true
            })
            wrap.forEach((i) => {
                i.className += ' move'
            })
        } else {
            this.setState({
                isCheck: false
            })
            wrap.forEach((i) => {
                i.className = 'wrap'
            })
        }
    }
    //点击了全选
    changeAllChecked(e) {
        this.props.changeAllChecked(e.target.checked)
    }
    render() {
        let { isAllChecked, shops } = this.props
        return (
            <div className="Shop">
                
                {/* 头部导航 */}
                <div>
                    <ComponentTitle title="购物车"></ComponentTitle>
                </div>
                {/* 主体部分  ul */}
                <div className="wrapOne">
                {
                    shops.length > 0 ? (
                        shops.map((item, index) => {
                            return (
                                <div key={item.id} className='wrap'>
                                    <div className="top" key={item.id}>
                                        <img src={shop_home} alt="" />
                                        <span>杭州保税区仓</span>
                                    </div>

                                    <div className="section" move={this.state.move}>
                                        {/* 左边  选中 图片 */}
                                        <div className='left_top'>
                                            <div className="left">
                                                <input checked={item.checked} onChange={this.changeShopCheck.bind(this, index)} type="checkbox" />
                                                <img src={item.img} alt="" />
                                            </div>
                                            {/* 中间价格 */}
                                            <div className="center ">
                                                <h4>{item.goodsname}</h4>
                                                <div className="button">
                                                    <span onClick={this.red.bind(this, item.id)}> - </span>
                                                    <span> {item.num} </span>
                                                    <span onClick={this.add.bind(this, item.id)}> + </span>
                                                </div>
                                                <b>总价：￥{filterPrice(item.price * item.num)}</b>
                                            </div>
                                            <div className="right">
                                                ￥{filterPrice(item.price)}
                                            </div>
                                        </div>
                                        <span className="del" onClick={this.del.bind(this, item.id)}>
                                            删<br />
                                            除
                                        </span>
                                    </div>
                                    <div className="bottom">
                                        <div className="all">
                                            <input type="checkbox" checked={isAllChecked} onChange={(e) => this.changeAllChecked(e)} />
                                            <span>全选</span>
                                        </div>
                                        <div className="update" onClick={this.addClassName.bind(this)} >
                                            <input type="checkbox" onChange={this.onChange.bind(this)} checked={this.state.isCheck} />
                                            <span >编辑</span>
                                        </div>
                                        <div className="num">总价：￥{this.props.allPrice?this.props.allPrice:0}</div>
                                        <div className="sum">
                                            去结算
                        </div>
                                    </div>
                                </div>
                            )
                        })) : (
                            <div className="shop_none">
                                <div className="none">
                                    <img src={shop_none} alt="" />
                                    <h3>购物车空空如也的</h3>
                                    <h3>
                                        快去逛逛吧~
                            </h3>
                                </div>
                            </div>
                        )
                }
                {/* 确认删除 是否删除 */}
                {
                    this.state.showDel ? (
                        <Del onCancel={this.showDel_cancel.bind(this)} id={this.state.id} onSure={(e) => { this.showDel_sure(e) }} ></Del>
                    ) : null
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        shops: shops(state),
        isAllChecked: isAllChecked(state),
        shopAdd: shopAdd(state),
        allPrice: allPrice(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // 购物车列表
        requestShops: (uid) => dispatch(requestShopAction(uid)),
        // 选中
        addCheckAction: (index, val) => dispatch(changeGoodsChecked(index, val)),
        changeAllChecked: val => dispatch(changeAllChecked(val)),
        // 购物车加号
        changeShopAdd: addId => dispatch(requestShopAddAction(addId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)


