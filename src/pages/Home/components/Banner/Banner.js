import React from 'react'
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Banner.css'
export default function Banner(props) {
    const {banner} = props

    return (
        <div className='banner'>
            <Carousel>
                {
                    banner.map(item=>{
                        return <img key={item.id} src={item.img} alt=""/>
                    })
                }
            </Carousel>
        </div>
    )
}
