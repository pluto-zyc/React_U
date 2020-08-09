import React from 'react'
import './Del.css'
export default function Del(props) {
    return (
        <div className="Del">
           <div className="info">
           <p>你确定要删除吗</p>
           <div className="span">
           <span onClick={props.onCancel.bind(this)}>取消</span>
            <span onClick={props.onSure.bind(this)}>确认</span>
           </div>
           </div>
        </div>
    )
}
