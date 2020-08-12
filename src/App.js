import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import asyncComponent from "./util/asyncComponent"

// import Index from './pages/Index/Index'
// const Index=asyncComponent(()=>import('./pages/'))
// import Reg from './pages/Reg/Reg'
// import Index from './pages/Index/Index'
// import IndexDetail from './pages/IndexDetail/IndexDetail'
// import CateDetail from './pages/CateDetail/CateDetail'
// import Login from './pages/Login/Login'
// import Reg from './pages/Reg/Reg'
// import MyRoute from './pages/MyRoute/MyRoute'
const Index=asyncComponent(()=>import("./pages/Index/Index"))
const IndexDetail=asyncComponent(()=>import("./pages/IndexDetail/IndexDetail"))
const CateDetail=asyncComponent(()=>import("./pages/CateDetail/CateDetail"))
const Login=asyncComponent(()=>import("./pages/Login/Login"))
const Reg=asyncComponent(()=>import("./pages/Reg/Reg"))
const MyRoute=asyncComponent(()=>import("./pages/MyRoute/MyRoute"))

function App() {
  return (
    // 列表渲染
    <div className="App">
       <Switch>
          {/* <Route path="/login" component={Login}></Route> */}
          <Route path="/login" component={Login}></Route>
         <MyRoute path="/index" component={Index}></MyRoute>
         <MyRoute path="/indexDetail/:id" component={IndexDetail}></MyRoute>
         <MyRoute path="/cateDetail" component={CateDetail}></MyRoute>
         <MyRoute path="/reg" component={Reg}></MyRoute>
       </Switch>
    </div>
    
  );
}

export default App;
