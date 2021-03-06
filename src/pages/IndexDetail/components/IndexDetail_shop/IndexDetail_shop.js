import React from 'react'
import './IndexDetail_shop.css'
import { Route } from 'react-router-dom';
export default function IndexDetail_shop(props) {

   const shop =  props.shop
   const specsattr = JSON.parse(shop.specsattr)
   const addClass = (index,e)=>{
      var arr = [...e.target.parentNode.children]
      arr.forEach((item,i)=>{
        if(index!=i){
            item.className = ''
        }else{
            item.className= 'select'
        }
      })
        
   }
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
                    {
                        shop?(
                        <h3>{shop.specsname}</h3>
                        ):null
                    }
                   <div className='span'>
                       {
                           shop?(
                            specsattr.map((item,index)=>{
                        return(
                            <span onClick={addClass.bind(this,index)} key={item}>{item}</span>
                            )
                            })
                           ):null
                       }
                  
                   </div>
                    <div className="p" onClick={props.changeShow.bind(this)}>加入购物车</div>
                </div>
               
            </div>
        </div>
    )
}
