import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './pages/home'
import Blog from './pages/blog'
import Informaineassay from './pages/informaineassay'
import Aboutme  from "./pages/aboutme/index"
import Detail from './compontens/articleDetail'
import lettcodeDetail from './compontens/lettcodeDetail'
import Resume from './pages/resume'
import lettcode from './pages/lettcode'

class App extends Component {
  render(){
    return(
      <Provider  store={store}>
        <HashRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/informaineassay' exact component={Informaineassay}></Route>
          <Route path='/aboutme' exact component={Aboutme}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/resume' exact component={Resume}></Route>
          <Route path='/lettcode' exact component={lettcode}></Route>
          <Route path='/lettcodeDetail/:id' exact component={lettcodeDetail}></Route>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
