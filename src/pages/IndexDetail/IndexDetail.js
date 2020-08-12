import React, { Component } from 'react'
import { requestIndexDetail } from '../../util/request'
import ComponentTitle from '../../component/Title/ComponentTitle'
import jifen from '../../assets/img/jifen.png'
import shop_pic from '../../assets/img/cart_on.png'
import './IndexDetail.css'
import { filterPrice } from '../../filters/Filters'
import IndexDetail_shop from './components/IndexDetail_shop/IndexDetail_shop'
import Alert from '../../util/Alert'
import { changeShopsAction, shops } from '../../store/index'
import { connect } from "react-redux"
import { requestShopAdd } from '../../util/request'
class IndexDetail extends Component {
    constructor() {
        super()
        this.state = {
            IndexDetail: [],
            isShow: 2,
            showAlert: false,
            timer: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id.slice(1)
        console.log(id);
        requestIndexDetail({ id: id }).then((res) => {
            this.setState({
                IndexDetail: res.data.list
            })
        })

    }
    // 添加数据
    shop_child(){
                // 添加商品到购物车
            const uid = sessionStorage.getItem('uid')
            const goodsid = this.state.IndexDetail[0].id
            const num = 1
            const id = {
                uid,
                num,
                goodsid,
            }
            requestShopAdd(id).then((res) => {
                if (res.data.code === 200) {
                    // 两秒消失
                    this.text=res.data.msg
                }else{
                    this.text=res.data.msg
                }
                this.setState({
                    showAlert: true
                })
                 // 两秒消失
                this.state.timer = setTimeout(() => {
                    this.setState({
                        showAlert: false
                    })
                }, 2000)
            })
            this.shop()
        }
    
    // 添加
    shop() {
        if (this.state.isShow === 1) {
            this.setState({
                isShow: 2
            })
        } else {
            this.setState({
                isShow: 1
            })
        }}

    render() {
        const { IndexDetail } = this.state
        return (
            <div className='indexDetail'>
                <div className="top">
                    <ComponentTitle title='商品详情' back></ComponentTitle>
                </div>
                {
                    IndexDetail ? (
                        IndexDetail.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="pic">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="section">
                                        <div className="title">
                                            <h4>{item.goodsname}</h4>
                                            <span>
                                                <img src={shop_pic} alt="" />
                                                <b >收藏</b>
                                            </span>
                                        </div>
                                        <div className="newPrice">
                                            <b>￥{filterPrice(item.price)}</b>
                                            {
                                                item.ishot ? <span>热卖</span> : null
                                            }
                                            {
                                                item.isnew ? <span>新品</span> : null
                                            }
                                        </div>
                                        <div className="oldPrice">￥{filterPrice(item.market_price)}</div>
                                    </div>
                                    <div className='banner_pic'>
                                        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                    </div>
                                </div>
                            )
                        })
                    ) : null
                }
                {
                    this.state.IndexDetail.length > 0 ? (
                        this.state.isShow === 1 ? <IndexDetail_shop changeShow={this.shop_child.bind(this)} shop={this.state.IndexDetail[0]}></IndexDetail_shop> : null
                    ) : null
                }
                {
                    this.state.showAlert ? (
                        <Alert info={this.text}></Alert>
                    ) :null
                }
                <div className="DetailFooter">
                    <span onClick={this.shop.bind(this)}>加入购物车</span>
                </div>

            </div>
        )
    }
    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }
}
// 把state放到porps上
// const mapStateToProps=(state)=>{
//     console.log(state)   
//     return  {
//         goods:goods(state)
//     }
// }
// // 把方法放到porps上
// const mapDispatchToProps=dispatch=>{
//     return {
//         requestGoods:()=>dispatch(requestGoodsAction())
//     }
// }


export default connect((state) => {
    console.log(state)
    return {
        shops: shops(state)
    }
})(IndexDetail)
