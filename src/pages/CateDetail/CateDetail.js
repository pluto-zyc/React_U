import React, { Component } from 'react'
import ComponentTitle from '../../component/Title/ComponentTitle'
import jifen from '../../assets/img/jifen.png'
import './CateDetail.css'
import { connect } from 'react-redux'
import querystring from 'qs'
import { requestCateGoodsAction, cateGoods } from '../../store/index'
import Add from '../../component/Add/Add'
import { requestIndexDetail } from '../../util/request'
// import { withRouter } from 'react-router-dom';
class CateDetail extends Component {
    constructor() {
        super()
        this.state = {
            showAdd: false,
            info: null,
            index:0
        }
    }
    componentDidMount() {
        const json = querystring.parse(this.props.location.search.slice(1))
        this.props.requestCateGoods(json)
    }
    add(id) {
        this.props.history.push('/indexDetail/:'+id)
    }
    render() {
        return (
            <div className="CateDetail">
                <div className="top">
                    <ComponentTitle title='电视' back></ComponentTitle>
                </div>
                <div className="section">
                    <ul>
                        {
                            this.props.cateGoods.length ? (
                                this.props.cateGoods.map((item,index) => {
                                    return (
                                        <li key={item.id}>
                                            <div className="left">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="right">
                                                <h3>{item.goodsname}</h3>
                                                <b>{item.price}</b>
                                                <span onClick={this.add.bind(this, item.id)} >立即抢购</span>
                                            </div>

                                        </li>
                                    )
                                })
                            ) : null
                        }
                    </ul>

                </div>
                {/* <div className="add">
                    {
                        this.state.showAdd ? (
                            <Add onEdit={this.add.bind(this)}></Add>
                        ) : null
                    }
                </div> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        cateGoods: cateGoods(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestCateGoods: (json) => dispatch(requestCateGoodsAction(json))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CateDetail)
