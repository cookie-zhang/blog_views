import React, {
  PureComponent
} from 'react'
import Header from '../../compontens/header/header'

class Aboutme extends PureComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='aboutme-box'>
        <Header />
        <div className='aboutme-container'>
          about me
        </div>
      </div>
    )
  }
}

export default Aboutme