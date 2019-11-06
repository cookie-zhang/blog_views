import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
