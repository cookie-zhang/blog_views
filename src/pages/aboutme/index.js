import React, {
  PureComponent
} from 'react'
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import './index.scss'

class Aboutme extends PureComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='aboutme-box'>
        <Header />
        <div className='aboutme-container'>
          kadshfk
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Aboutme