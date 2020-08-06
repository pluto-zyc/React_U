import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
export default class Lanjie extends Component {
    render() {
        const user = sessionStorage.getItem('user')
        return (
            <div>
                {user?
                <Route {...this.props}></Route>:
                <Redirect to="/login"></Redirect>}
            </div>
        )
    }
}
