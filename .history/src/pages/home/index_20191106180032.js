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
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
export default Home