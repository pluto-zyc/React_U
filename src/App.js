import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'

// import Index from './pages/Index/Index'
// const Index=asyncComponent(()=>import('./pages/'))
// import Reg from './pages/Reg/Reg'
import Index from './pages/Index/Index'
function App() {

  return (
    // 列表渲染
    <div className="App">
       <Switch>
          {/* <Route path="/login" component={Login}></Route> */}
         <Route path="/index" component={Index}></Route>
       </Switch>
    </div>
    
  );
}

export default App;
