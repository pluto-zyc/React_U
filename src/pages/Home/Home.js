import React, { Component } from 'react'

import {requestBanner,requestGoods} from '../../util/request'
import Title from './components/Title/Title'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            banner:[],
            goods:[]
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
        requestGoods().then((res)=>{
            var arr = res.data.list
            arr.forEach((item)=>{
                item.img = this.$img+item.img
            })
            this.setState({
                goods:arr
            })
        })
    }
    render() {
        const {banner,list} = this.state
        return (
            <div className="Home">
               <Title list={list}></Title>
               <Banner banner={banner}></Banner>
               <Info></Info>
            </div>
        )
    }
}
