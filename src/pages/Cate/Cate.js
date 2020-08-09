import React, { Component } from 'react'
import './Cate.css'
import {Route,Switch} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import ComponentTitle from '../../component/Title/ComponentTitle' 
import {connect} from 'react-redux'
import Jiayong from './components/Jiayong/Jiayong'
import Shuma from './components/Shuma/Shuma'
import Bangong from './components/Bangong/Bangong'
import Fuzhuang from './components/Fuzhuang/Fuzhuang'
import Meizhuang from './components/Meizhuang/Meizhuang'
import Yundong from './components/Yundong/Yundong'
import jifen from '../../assets/img/jifen.png'
import {requestchangeCateTreesAction,cateTrees} from '../../store/index'
 class Cate extends Component {
     constructor(){
         super()
        this.state={
            tag:0,
            arr:[]
        }
     }

    componentDidMount(){
        this.props.requestCateTree()
       
    }
    changeTag(index,arr){
       this.setState({
           tag:index,
           arr:arr
       })
    }
    toCateDeatil(json){
        this.props.history.push('/cateDetail?fid='+json)
    }
    render() {
      const {arr} = this.state
        return (
            <div className='Cate'>
                <div className="top">
                <ComponentTitle title='分类'></ComponentTitle>
                </div>
            <div className="section">
               <ul className="left">
                  {
                  this.props.cateTrees.length>0?(
                    this.props.cateTrees.map((item,index)=>{
                          return(
                            <li onClick={this.changeTag.bind(this,index,item.children)} className={this.state.tag ===index ?'select':''} key={item.id}>
                            <span>{item.catename}</span>
                            </li>
                          )
                      })
                  ):null
                  }
               {/* <NavLink activeClassName="select" to='/index/cate/jiayong'>
                   家用
               </NavLink>
               <NavLink activeClassName="select" to='/index/cate/shuma'>
                   数码
               </NavLink>
               <NavLink activeClassName="select" to='/index/cate/bangong'>
                   办公
               </NavLink>
               <NavLink activeClassName="select" to='/index/cate/fuzhuang'>
                  服装
               </NavLink>
               <NavLink activeClassName="select" to='/index/cate/meizhuang'>
                  美妆
               </NavLink>
               <NavLink activeClassName="select" to='/index/cate/yundong'>
                  运动
               </NavLink>
               </div>
              <Switch>
                  <Route path="/index/cate/jiayong" component={Jiayong}></Route>
                  <Route path="/index/cate/shuma" component={Shuma}></Route>
                  <Route path="/index/cate/bangong" component={Bangong}></Route>
                  <Route path="/index/cate/fuzhuang" component={Fuzhuang}></Route>
                  <Route path="/index/cate/meizhuang" component={Meizhuang}></Route>
                  <Route path="/index/cate/yundong" component={Yundong}></Route>
              </Switch> */}
            </ul>
            <ul className="right">
               {
                   arr.length>0?(
                       arr.map((item)=>{
                           return (
                            <li key={item.id} onClick={this.toCateDeatil.bind(this,item.pid)}>
                            <div>
                            <img src={item.img} alt=""/>
                           <div className="txt">{item.catename}</div>
                            </div>
                            </li>
                           )
                       })
                   ):null
               }
            </ul>
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)   
    return  {
        cateTrees:cateTrees(state),
        // cateGoods:cateGoods(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        requestCateTree:()=>dispatch(requestchangeCateTreesAction()),
        // requestCateGoods:(fid)=>dispatch(requestCateGoodsAction(fid))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cate)
