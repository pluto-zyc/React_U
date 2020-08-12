import axios from 'axios'
import qs from 'qs'
//请求拦截
axios.interceptors.request.use(config => {
    if (config.url != '/api/login') {
        var user = JSON.parse(sessionStorage.getItem('user'))
        config.headers.authorization = user.token;
    }
    return config
})
axios.interceptors.response.use((res)=>{
    console.log(res.config.url);
    console.log(res);
    if(res.data.msg==="登录已过期或访问权限受限"){
         window.open('/login','_self')
        return;
    }
    return res
})
// 登录请求
export const requestLogin = (json)=>axios({
    url:'/api/login',
    method:'post',
    data:qs.stringify(json)
})
// 注册请求
export const requestReg = (json)=>axios({
    url:'/api/register',
    method:'post',
    data:qs.stringify(json)
})
// 首页轮播信息
export const requestBanner = ()=>axios({
    url:'/api/getbanner',
    method:'get',
})

// 首页商品信息首页
export const requestGoods = ()=>axios({
    url:'/api/getindexgoods',
    method:'get',
})

// 首页 一条 商品详情
export const requestIndexDetail = (params)=>axios({
    url:'/api/getgoodsinfo',
    method:'get',
    params
})


// 分类商品列表树
export const requestCateTree = ()=>axios({
    url:'/api/getcatetree',
    method:'get',

})

// 分类商品列表树
export const requestCateGoods = (params)=>axios({
    url:'/api/getgoods',
    method:'get',
    params
})

// 购物车s删除
export const requestShopDel = (params)=>axios({
    url:'/api/cartdelete',
    method:'post',
    data:qs.stringify(params)
})
// 购物车添加
export const requestShopAdd = (params)=>axios({
    url:'/api/cartadd',
    method:'post',
    data:qs.stringify(params)
})
// 购物车列表
export const requestShopList = (params)=>axios({
    url:'/api/cartlist',
    method:'get',
    params
})
// 购物车修改
export const requestShopUpdate = (params)=>axios({
    url:'/api/cartedit',
    method:'post',
    data:qs.stringify(params)
})

