import React from 'react'
import Logo from '../../../../assets/img/logo.jpg'
import './Title.css'
export default function Title() {
    return (
        <div className="Title">
           <img src={Logo} alt=""/>
           <input type="text" placeholder=" 搜索商品"/>
        </div>
    )
}
