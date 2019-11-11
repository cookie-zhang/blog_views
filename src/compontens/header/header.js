import React, { PureComponent } from 'react'
import { Layout } from 'antd'
import './index.scss'
import { Link } from 'react-router-dom';
const { Header } = Layout;

class Heade extends PureComponent {
  render() {
    return (
        <Header className='head-box'>
          <div className='head-container'>
            <Link to={'/'}><div className='head-name'></div></Link>
            <div className='head-nav'>
              <ul>
                <Link className='link' to={'/'}><li>首页</li></Link>
                <Link className='link' to={'/blog'}><li>博客</li></Link>
                <Link className='link' to={''}><li>关于我</li></Link>
                <Link className='link' to={''}><li>亲随笔</li></Link>
              </ul>
            </div>
          </div>
        </Header>
    )
  }
}
export default Heade