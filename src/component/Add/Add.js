import React from 'react'
import './Add.css'
import jifen from '../../assets/img/jifen.png'
import {withRouter} from 'react-router-dom'
function Add(props) {

    return (
        <div className="Add">
            <div className="top"></div>
            <div className="bot">
                <div className="bot_top"></div>
                 <div className="section">
                   <img src={jifen} alt=""/>
              <span>美的冰箱跑步机</span>
                 
                 </div>
                <div className="bot_bot">
                    <h3>美妆容量</h3>
                   <div className='span'>
                   <span>15L</span>
                    <span>15L</span>
                    <span>15L</span>
                   </div>
                    <div className="p" onClick={props.onEdit.bind(this)}>加入购物车</div>
                </div>
               
            </div>
        </div>
    )
}
export default withRouter(Add)
