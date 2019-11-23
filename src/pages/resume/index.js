import React, { PureComponent } from 'react'
import './index.scss'
import Header from '../../compontens/header/header'
import './index.scss'

class Aboutme extends PureComponent {
  render() {
    return (
      <div className='resume-box'>
        <Header />
        <div className='resume-contanier'>
          <div className='resume-left'>
            <p className='nav'>项目展示</p>
            <div className=''>
              作品11
            </div>
          </div>
          <div className='resume-center'>
            <p className='nav'>简历</p>
            <div className=''>
            </div>
          </div>
          <div className='resume-right'>
            <p className='nav'>项目展示</p>
            <div className=''>
              作品11
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Aboutme