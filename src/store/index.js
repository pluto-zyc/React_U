import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { requestGoods,requestCateTree,requestCateGoods} from "../util/request"
//初始状态
const initState = {
    goods: [],//电影的列表数据
     shops:[],
     cateTrees:[],
     cateGoods:[]
}

//action creators
//dispatch(changeMovieAction())
// 首页商品列表
 const changeGoodsAction = (arr) => {
    return { type: "changeMovie", list: arr }
}
// 添加商品
export const changeShopsAction = (arr) => {
    return { type: "changeShop", list: arr }  
}
// 分类cate tree
const changeCateTreesAction = (arr) => {
    return { type: "changeCateTrees", list: arr }  
}

// 分类cate      cateGoods
const changeCateGoodsAction = (arr) => {
    return { type: "changeCateGoods", list: arr }  
}

// 请求首页数据列表
//页面一进来，就要出发一个请求，dispatch(requestgoodsAction())
export const requestGoodsAction = () => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        const { goods } = getState()
        if (goods.length > 0) {
            return;
        }
        //发请求
        requestGoods().then(res => {
            dispatch(changeGoodsAction(res.data.list))
        })
    }
}
// 请求分类 tree
export const requestchangeCateTreesAction = () => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        const { cateTrees } = getState()
        if (cateTrees.length > 0) {
            return;
        }
        //发请求
        requestCateTree().then(res => {
            dispatch(changeCateTreesAction(res.data.list))
        })
    }
}
// 请求分类 goods
export const requestCateGoodsAction = (json) => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        const { cateGoods } = getState()
        if (cateGoods.length > 0) {
            return;
        }
        //发请求
        requestCateGoods(json).then(res => {
            dispatch(changeCateGoodsAction(res.data.list))
        })
    }
}

//reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        //修改电影的列表
        case "changeMovie":
            //{type:"changeMovie",list:[{},{}]}
          
            return {
                
                ...state,
                goods: action.list
            }
        case "changeShop":
            //{type:"changeShop",list:[]}
            var arr = JSON.stringify([...state.shops,action.list])
            sessionStorage.setItem('shop_sesstion',arr)
            return {
                ...state,
                shops: sessionStorage.getItem('shop_sesstion') 
            }
        case "changeCateTrees":
            //{type:"changeCateTrees",list:[]}
            return {
                ...state,
                cateTrees: action.list
            }
        case "changeCateGoods":
            //{type:"changeCateGoods",list:[]}
            return {
                ...state,
                cateGoods: action.list
            }
            
        default:
            return state;
    }
}

//创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

//导出数据
export const goods = (state) => state.goods
export const shops = (state) => state.shops
export const cateTrees = (state) => state.cateTrees
export const cateGoods = (state) => state.cateGoods


export default store
