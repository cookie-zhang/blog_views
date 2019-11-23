import React, { PureComponent } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../compontens/header/header'
import './index.scss'
import { Button } from 'antd';

class Aboutme extends PureComponent {

  render(){
    return (
      <div className='aboutme-box'>
        <Header />
        <div className='main-box'>
          <div className='aboutme-container'>
            <div className='img-box'>
              <img src='http://cookiezhang.com/imgs/caochang1.jpg' /><br/>
              <Link to='/resume'><Button className='btn' type="primary">查看简历</Button></Link>
            </div>
            <div className='infos-box'>
              <h2>张见飞</h2>
              <div className='introduce-myself-box'>
                <div className='introduce-myself'>
                  <p>web 前端工程师一枚 </p>
                  <p>认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术</p>
                  <p>仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生</p>
                  <p>认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术</p>
                  <p>仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生</p>
                  <p>认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术认真钻研技术</p>
                  <p>仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生仔细品味人生</p>
                </div>
                <div className='linkWay'>
                  <ul className='linkUl'>
                    <li>
                      <span className='pad20'>掘金:</span>
                      <a href='https://juejin.im/user/5a75dd886fb9a063586550e6' target='_blank'>
                        https://juejin.im/user/5a75dd886fb9a063586550e6
                      </a>
                    </li>
                    <li>
                      <span className='pad20'>github:</span>
                        <a href='https://github.com/cookie-zhang' target='_blank'>
                          https://github.com/cookie-zhang
                        </a>
                    </li>
                    <li>
                      <span className='pad20'>微信:</span>
                      <img src='http://cookiezhang.com/imgs/weixin.jpg'></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='link-div'>
            </div>
            <div className='link-box'>      
            </div>
          </div>
          </div>
       
        
      </div>
    )
  }
}

export default Aboutme