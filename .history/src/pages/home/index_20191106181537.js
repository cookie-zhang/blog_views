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
                    <div id="live2d-widget">
                    <canvas id="live2dcanvas" width="300" height="600" style="position: fixed; opacity: 0.7; right: 0px; bottom: -20px; z-index: 99999; pointer-events: none;"></canvas>
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Home