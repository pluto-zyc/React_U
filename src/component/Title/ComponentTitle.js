import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './ComponentTitle.css'


function ComponentTitle(props) {
   const goBack = ()=>{
        props.history.go(-1)
    }
        return (
            <div className='ComponentTitle'>
                <span onClick={goBack.bind(this)}>返回</span>
                {
                    props?(
                        <b>{props.title}</b>
                    ):null
                }
            </div>
        )
}
export default withRouter(ComponentTitle)
