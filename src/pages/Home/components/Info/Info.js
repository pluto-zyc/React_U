import React from 'react'
import sale_pic from '../../../../assets/img/1.jpg'
import './Info.css'
import { Button} from 'antd-mobile';
export default function Info() {
    const arr = [
        {
            id: 1,
            title: '限时抢购',
            src:sale_pic
        },
        {
            id: 2,
            title: '积分商城',
            src:sale_pic
        },
        {
            id: 3,
            title: '联系我们',
            src:sale_pic
        },
        {
            id: 4,
            title: '商品分类',
            src:sale_pic
        },
    ]
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
                <ul>
                    <li>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                        <div className="bot_bot">
                            <h4>肥死顿山地自相车</h4>
                            <span>￥399.00</span>
                            <Button type="primary">立即抢购</Button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
