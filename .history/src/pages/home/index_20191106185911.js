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
                    <div id="zzsc"></div>
                    <div style="text-align:center;clear:both;margin-top:20px">
<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
<script src="/follow.js" type="text/javascript"></script>
</div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Home