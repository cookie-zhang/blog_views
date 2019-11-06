import React, { PureComponent } from 'react'
import { Layout } from 'antd';
import './index.scss'
const { Header, Content, Footer } = Layout;

class Home extends PureComponent {
    render(){
        return(
            <Layout>
                <Header>Header</Header>
                <Content>
                    content
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Home