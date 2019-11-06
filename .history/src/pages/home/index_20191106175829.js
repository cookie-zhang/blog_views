import React, { PureComponent } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


import './index.scss'
class Home extends PureComponent {
    render(){
        return(
            <div className='home-contanier'>
                <div className='title-contanier'>hello world</div>
                <DatePicker />
            </div>
        )
    }
}
export default Home