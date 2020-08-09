import React, { Component } from 'react'
import {requestIndexDetail} from '../../util/request'
import ComponentTitle from '../../component/Title/ComponentTitle'
import jifen from '../../assets/img/jifen.png'
import shop_pic from '../../assets/img/cart_on.png'
import './IndexDetail.css'
import {filterPrice} from '../../filters/Filters'
import IndexDetail_shop from './components/IndexDetail_shop/IndexDetail_shop'
import Alert from '../../util/Alert'
import {changeShopsAction,shops} from '../../store/index'
import {connect} from "react-redux"
 class IndexDetail extends Component {
    constructor(){
        super()
        this.state= {
            IndexDetail:[],
            isShow:2,
            showAlert:false,
            timer:null
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id.slice(1)
        requestIndexDetail({id:id}).then((res)=>{
             this.setState({
                 IndexDetail:res.data.list
             })
        })
       
    }

    shop(e){
       if(e.target.innerHTML === '加入购物车'){
           this.setState({
            showAlert:true
           })
        //    添加商品到购物车
           this.props.requestShop(this.state.IndexDetail)
           this.state.timer = setTimeout(()=>{
            this.setState({
                showAlert:false
               })
           },2000)
       }
       if(this.state.isShow === 1){
        this.setState({
            isShow : 2
        }) 
       }else{
            this.setState({
                isShow : 1
            }) 
       }
      
     
    }
    render() {
        const {IndexDetail} = this.state
        return (
            <div className='indexDetail'>
                  <div className="top">
                        <ComponentTitle title='商品详情'></ComponentTitle>
                  </div>
                {
                     IndexDetail?(
                        IndexDetail.map((item)=>{
                            return(
                                <div key={item.id}>
                                <div className="pic">
                                <img src={item.img} alt=""/>
                            </div>
                             <div className="section">
                             <div className="title">
                            <h4>{item.goodsname}</h4>
                               <span>
                                   <img src={shop_pic} alt=""/>
                                   <b onClick={this.shop.bind(this)}>收藏</b>
                              </span>
                             </div>
                              <div className="newPrice">
                            <b>￥{filterPrice(item.price)}</b>
                              {
                                  item.ishot?<span>热卖</span>:null
                              }
                              {
                                  item.isnew?<span>新品</span>:null
                              }
                              </div>
                            <div className="oldPrice">￥{filterPrice(item.market_price)}</div>
                          </div>
                          <div className='banner_pic'>
                          <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                          </div>
                            </div>
                            )
                        })
                     ):null
                }
                {
                    this.state.IndexDetail.length>0?(
                        this.state.isShow === 1?<IndexDetail_shop changeShow={this.shop.bind(this)} shop={this.state.IndexDetail[0]}></IndexDetail_shop>:null
                    ):null
                }
                {
                    this.state.showAlert?(
                        <Alert></Alert>
                    ):null
                }
                
                
           </div> 
        )
    }
    componentWillUnmount(){
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


export default connect((state)=>{
    console.log(state)   
    return  {
        shops:shops(state)
            }
    },(dispatch)=>{
    return {
        requestShop:(arr)=>dispatch(changeShopsAction(arr))
           }
})(IndexDetail)
