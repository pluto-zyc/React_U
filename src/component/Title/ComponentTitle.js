import React, { Component } from './node_modules/react'
import { withRouter } from './node_modules/react-router-dom';
import './Title.css'
class ComponentTitle extends Component {
    goBack(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className='Title'>
                <span onClick={this.goBack.bind(this)}>返回</span>
                <b>注册</b>
            </div>
        )
    }
}
export default withRouter(ComponentTitle)
