import React, { Component } from 'react'

import {requestBanner} from '../../util/request'
import Title from './components/Title/Title'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'

import {connect} from "react-redux"
import { goods, requestGoodsAction } from '../../store/index'
class Home extends Component {
    constructor(){
        super()
        this.state={
            banner:[],
        }
    }
    componentDidMount(){
        requestBanner().then((res)=>{
            var arr = res.data.list
            arr.forEach((item)=>{
                item.img = this.$img+item.img
            })
            this.setState({
                banner:arr
            })
        })
        this.props.requestGoods()
    }

    render() {
        const {banner,list} = this.state
        return (
            <div className="Home">
               <Title list={list}></Title>
               <Banner banner={banner}></Banner>
              {this.props.goods.length>0? <Info goods={this.props.goods[0].content}></Info>:null}
              
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)   
    return  {
        goods:goods(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        requestGoods:()=>dispatch(requestGoodsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
