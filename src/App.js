import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './pages/home'
import Blog from './pages/blog'
import Informaineassay from './pages/informaineassay'
import Aboutme  from "./pages/aboutme/index";
import Detail from './compontens/articleDetail'
import Resume from './pages/resume'

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
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
