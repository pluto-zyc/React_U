import React from 'react'
import './IndexDetail_shop.css'
export default function IndexDetail_shop(props) {
   const shop =  props.shop
    return (
        <div className="IndexDetail_shop">
            <div className="top"></div>
            <div className="bot">
                <div className="bot_top"></div>
                 <div className="section">
                   <img src={shop.img} alt=""/>
              <span>{shop.goodsname}</span>
                 
                 </div>
                <div className="bot_bot">
                    <h3>美妆容量</h3>
                   <div className='span'>
                   <span>15L</span>
                    <span>15L</span>
                    <span>15L</span>
                   </div>
                    <div className="p" onClick={props.changeShow.bind(this)}>加入购物车</div>
                </div>
               
            </div>
        </div>
    )
}
