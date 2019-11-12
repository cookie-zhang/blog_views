import React, {
  PureComponent
} from 'react'
import './index.scss'
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'

class Aboutme extends PureComponent {
  
  render(){
    return (
      <div className='aboutme-box'>
        <Header />
        <div className='aboutme-container'>
          about me
        </div>
        <Footer />
      </div>
    )
  }
}

export default Aboutme