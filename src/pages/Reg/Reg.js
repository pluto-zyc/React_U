import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Reg.css'
import ComponentTitle from '../../component/Title/ComponentTitle'
export default class Reg extends Component {
    render() {
        return (
            <div className="Reg">
                <div className="top">
                <ComponentTitle title='注册'></ComponentTitle>
                </div>
                <div className="info">
                    <div className='text'>
                        账号：
                        <input type="text"/>
                    </div>
                    <div className='pass'>
                        密码：
                        <input type="text"/>
                    </div>
                   <div className='miss_pass'>
                   <Link to="/">忘记密码</Link>
                   </div>
                    <div>
                        <button>登录</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
