import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="top">
                    <span>登录</span>
                    <span>注册</span>
                </div>
                <div className="info">
                    <div>
                        账号：
                        <input type="text"/>
                    </div>
                    <div>
                        密码：
                        <input type="text"/>
                    </div>
                    <Link to="/">忘记密码</Link>
                </div>
                
                
            </div>
        )
    }
}
