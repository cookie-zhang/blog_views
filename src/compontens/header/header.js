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
              <li><Link className='link' to={'/'}>首页</Link></li>
              <li><Link className='link' to={'/blog'}>博客</Link></li>
              <li><Link className='link' to={'/aboutme'}>关于我</Link></li>
              <li><Link className='link' to={'/informaineassay'}>亲随笔</Link></li>
            </ul>
            </div>
          </div>
        </Header>
    )
  }
}
export default Heade