import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { requestLogin } from '../../util/request'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: 123,
                password: 123,
            }
        }
    }
    componentDidMount() {
        
    }
    login(){
        requestLogin(this.state.user).then((res)=>{
            sessionStorage.setItem('uid',res.data.list.uid)
            sessionStorage.setItem('name',res.data.list.nickname)
            if(res.data.code===200){
                this.props.history.push('/index/home')
            }
        })
    }
    changeuser(key, e) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    render() {
        return (
            <div className="Login">
                <div className="top">
                    <span>登录</span>
                    <b>注册</b>
                </div>
                <div className="info">
                    <div className='text'>
                        账号：
                        <input onChange={this.changeuser.bind(this, 'phone')} value={this.state.user.phone} type="text" />
                    </div>
                    <div className='pass'>
                        密码：
                        <input onChange={this.changeuser.bind(this, 'password')} value={this.state.user.password} type="text" />
                    </div>
                    <div className='miss_pass'>
                        <Link to="/">忘记密码</Link>
                    </div>
                    <div>
                        <button onClick={this.login.bind(this)}>登录</button>
                    </div>
                </div>


            </div>
        )
    }
}
