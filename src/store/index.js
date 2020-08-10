import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { requestGoods,requestCateTree,requestCateGoods,requestShopList,requestIndexDetail,requestShopUpdate} from "../util/request"
//初始状态
const initState = {
     goods: [],//电影的列表数据
     shops:[],
     cateTrees:[],
     cateGoods:[],
     isAllChecked:false,
     shopAdd:[],
    
}
//action creators
//dispatch(changeMovieAction())
// 首页商品列表
 const changeGoodsAction = (arr) => {
    return { type: "changeMovie", list: arr }
}
// 商品列表
const changeShopsAction = (arr) => {
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
export const changeGoodsChecked=(index,val)=>{
    return {
        type:"changChecked",
        index,
        val
    }
}
export const changeAllChecked=(val)=>{
    return {
        type:"changeAllChecked",
        val
    }
}

// 修改购物车shopNum
const changeAddShopAction = (arr) => {
    return { type: "changeShopNum", list: arr }  
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
        // const { cateTrees } = getState()
        // if (cateTrees.length > 0) {
        //     return;
        // }
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
// 购物车请求一条
export const requestGoodsInfoAction = (json) => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        // const { shops } = getState()
        // if (shops.length > 0) {
        //     return;
        // }
        //发请求
        requestShopList(json).then(res => {
            const list=res.data.list?res.data.list:[]
            list.forEach((item) => {
                item.checked = false
            })
            dispatch(changeShopsAction(list))
        })
    }
}
// 请求商品列表
export const requestShopAction = (json) => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        // const { shops } = getState()
        // if (shops.length > 0) {
        //     return;
        // }
        //发请求
        requestShopList(json).then(res => {
            const list=res.data.list?res.data.list:[]
            list.forEach((item) => {
                item.checked = false
            })
            dispatch(changeShopsAction(list))
        })
    }
}
// 购物车修改请求
export const requestShopAddAction = (json) => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        // const { shops } = getState()
        // if (shops.length > 0) {
        //     return;
        // }
        //发请求
        requestShopUpdate(json).then(res => {
            dispatch(changeAddShopAction(res.data.list))
        })
    }
}


//reducer 修改state
const reducer = (state = initState, action) => {
    const {shops}=state
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
           
            return {
                ...state,
                shops: action.list
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
        case "changChecked":
            shops[action.index].checked=action.val;
            return {
                ...state,
                shops,
                isAllChecked:shops.every(item=>item.checked)
            }
        case "changeAllChecked":
            console.log(action);
            shops.forEach(item=>{
                item.checked=action.val
            })
            return {
                ...state,
                isAllChecked:action.val,
                shops
            }
        case "changeShopNum":
            return {
                ...state,
                shopAdd:action.list,
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
export const isAllChecked = (state) => state.isAllChecked
export const shopAdd = (state) => state.shopAdd
export default store
