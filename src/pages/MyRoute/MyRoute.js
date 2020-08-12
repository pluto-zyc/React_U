import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"
export default class MyRoute extends Component {
    render() {
        const name =sessionStorage.getItem("name")
        return (
            <div>
                {name?
                 <Route {...this.props}></Route>:
            	<Redirect to="/login"></Redirect>}
            </div>
        )
    }
}