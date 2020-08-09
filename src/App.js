import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'

// import Index from './pages/Index/Index'
// const Index=asyncComponent(()=>import('./pages/'))
// import Reg from './pages/Reg/Reg'
import Index from './pages/Index/Index'
import IndexDetail from './pages/IndexDetail/IndexDetail'
import CateDetail from './pages/CateDetail/CateDetail'

function App() {

  return (
    // 列表渲染
    <div className="App">
       <Switch>
          {/* <Route path="/login" component={Login}></Route> */}
         <Route path="/index" component={Index}></Route>
         <Route path="/indexDetail/:id" component={IndexDetail}></Route>
         <Route path="/cateDetail" component={CateDetail}></Route>
         
       </Switch>
    </div>
    
  );
}

export default App;
