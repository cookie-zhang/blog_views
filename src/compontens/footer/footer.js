import React, { PureComponent } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import './footer.scss'
const { Footer } = Layout;

class Heade extends PureComponent {
  render() {
    return (
        <Footer className='footer-box'>
          <div className='footer-contanier'>
            <div className='footer-d'>
              <img src='https://cookiezhang.com/imgs/weixin.jpg' />
              <span>微信</span>
            </div>
            <div className='footer-d'>
              <img src='https://cookiezhang.com/imgs/gongzhonghao.jpg' />
              <span>微信公众号</span>
            </div>
            <div className='footer-link'>
              <p>掘 金： <a href='https://github.com/cookie-zhang' target='_blank' >https://github.com/cookie-zhang </a></p>
              <p>gihub：<a href='https://juejin.im/user/5a75dd886fb9a063586550e6/posts' target='_blank' >https://juejin.im/user/5a75dd886fb9a063586550e6/posts </a></p>
            </div>
          </div>
        </Footer>
    )
  }
}
export default Heade