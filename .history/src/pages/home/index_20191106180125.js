import React, { PureComponent } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.scss'
const { Header, Content, Footer } = Layout;

class Home extends PureComponent {
    render(){
        return(
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Home