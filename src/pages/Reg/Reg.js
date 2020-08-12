import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Reg.css'
import {requestReg} from '../../util/request'
import ComponentTitle from '../../component/Title/ComponentTitle'
import Alert from '../../util/Alert'
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            showAlert:false,
            user: {
                phone: '',
                nickname:'',
                password: ''
            }
        }
    }
    reg(){
        requestReg(this.state.user).then((res)=>{
            if(res.data.code===200){
                this.info = '注册成功'
                    this.setState({
                        showAlert:true
                    })
                    this.timer = setTimeout(()=>{
                        this.setState({
                            showAlert:true
                        })
                        this.props.history.push('/login')
                    },2000)   
            }else{
                this.info='注册失败'
                this.setState({
                    showAlert:true
                })
                this.timer = setTimeout(()=>{
                    this.setState({
                        showAlert:false
                    })
                },2000)
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
            <div className="Reg">
                <div className="top">
                <ComponentTitle title='注册' back></ComponentTitle>
                </div>
                <div className="info">
                    <div className='text'>
                        手机号：
                        <input onChange={this.changeuser.bind(this,'phone')} type="text"/>
                    </div>
                    <div className='text'>
                        昵称：
                        <input onChange={this.changeuser.bind(this,'nickname')} type="text"/>
                    </div>
                    <div className='pass'>
                        密码：
                        <input onChange={this.changeuser.bind(this,'password')} type="text"/>
                    </div>
                   <div className='miss_pass'>
                   <Link to="/">忘记密码</Link>
                   </div>
                    <div>
                        <button onClick={this.reg.bind(this)}>注册</button>
                    </div>
                </div>
                {
                    this.state.showAlert?<Alert info={this.info}></Alert>:null
                }
                
            </div>
        )
    }
}
