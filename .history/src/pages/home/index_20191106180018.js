import React, { PureComponent } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.scss'
const { Header, Content, Footer } = Layout;

class Home extends PureComponent {
    render(){
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                
            </Layout>
        )
    }
}
export default Home