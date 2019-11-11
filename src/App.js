import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import blog from './pages/blog'



class App extends Component {
  render(){
    return(
      <HashRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/blog' exact component={blog}></Route>
      </HashRouter>
    )
  }
}

export default App;
