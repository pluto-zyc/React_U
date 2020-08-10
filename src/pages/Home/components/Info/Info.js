import React from 'react'
import sale_pic from '../../../../assets/img/1.jpg'
import './Info.css'
// import { Button } from 'antd-mobile';
import jifen from '../../../../assets/img/jifen.png'
// 过滤
import {filterPrice} from '../../../../filters/Filters'
import {Link} from 'react-router-dom' 
export default function Info(props) {
    const arr = [
        {
            id: 1,
            title: '限时抢购',
            src: sale_pic
        },
        {
            id: 2,
            title: '积分商城',
            src: sale_pic
        },
        {
            id: 3,
            title: '联系我们',
            src: sale_pic
        },
        {
            id: 4,
            title: '商品分类',
            src: sale_pic
        },
    ]
    const toDetail=()=>{
        console.log(props);
    }
    
    return (
        <div className="Info">
            <div className="top">
                <ul>
                    {
                        arr.map((item) => {
                            return <li key={item.id}>
                                <p><a href=""><img src={item.src} alt="" /></a></p>
                                <span>{item.title}</span>
                            </li>
                        })
                    }

                </ul>
            </div>
            <div className="bot">
                {
                   props.goods.map((item) => {
                        return (
                            <Link to={"/indexDetail/:"+item.id} className="ul" key={item.id}>
                                <li>
                                    <b>
                                        <img src={item.img} alt="" />
                                    </b>
                                    <div className="bot_bot">
                                        <h4>{item.goodsname}</h4>
                                        <span className='price'>{filterPrice(item.price)}</span>
                                        <div className='buyNow'>立即抢购</div>
                                    </div>
                                </li>
                    </Link> 
                        )
                    })  
                }
                {/* <button onClick={change.bind(this)}>annou </button> */}
            </div>
        </div>
    )
}




