import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use((res)=>{
    console.log(res.config.url);
    console.log(res);
    return res
})
// 登录请求
export const requestLogin = (json)=>axios({
    url:'/login',
    method:'post',
    data:qs.stringify(json)
})
// 首页轮播信息
export const requestBanner = ()=>axios({
    url:'/api/getbanner',
    method:'get',
})
// 首页商品信息
export const requestGoods = ()=>axios({
    url:'/api/getindexgoods',
    method:'get',
})

