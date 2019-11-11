import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Informaineassay from './pages/informaineassay'
import Aboutme  from "./pages/aboutme/index";



class App extends Component {
  render(){
    return(
      <HashRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/blog' exact component={Blog}></Route>
        <Route path='/informaineassay' exact component={Informaineassay}></Route>
        <Route path='/aboutme' exact component={Aboutme}></Route>
        </HashRouter>
    )
  }
}

export default App;
