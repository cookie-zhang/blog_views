import React, {
  PureComponent
} from 'react'
import './index.scss'
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import './index.scss'

class Aboutme extends PureComponent {
  
  render(){
    return (
      <div className='aboutme-box'>
        <Header />
        <div className='aboutme-container'>
          <div className='img-box'>
            <img src='http://cookiezhang.com/imgs/vue1.jpg' />
          </div>
          <div className='infos-box'>
            <p>张见飞</p>
            <p>web 前端工程师一枚 </p>
            <p>认真钻研技术</p>
            <p>仔细品味人生</p>
          </div>
          <div className='link-div'>
            <h3></h3>
          </div>
          <div className='link-box'>      
          </div>
        </div>
        <Footer />
        
      </div>
    )
  }
}

export default Aboutme