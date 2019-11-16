import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import { actionCreators } from './store'
import './index.scss'
import { Menu, Icon } from 'antd';

class Informainleassay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articleList:[
        {
          id: 1,
          title:'真实到赤裸的国产良心片，多希望你看不懂',
          content:'真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue1.jpg'
        },
        {
          id: 2,
          title:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！',
          content:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！实到赤【倒计时2天】双十一促销仅一天【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue2.jpg'
        },
        {
          id: 3,
          title:'真实到赤裸的国产良心片，多希望你看不懂',
          content:'真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue1.jpg'
        },
        {
          id: 4,
          title:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！',
          content:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！实到赤【倒计时2天】双十一促销仅一天【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue2.jpg'
        },
        {
          id: 5,
          title:'真实到赤裸的国产良心片，多希望你看不懂',
          content:'真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue2.jpg'
        },
        {
          id: 6,
          title:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！',
          content:'【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！实到赤【倒计时2天】双十一促销仅一天【倒计时2天】双十一促销仅一天，但我们的产品免费用一年！多希望你看不懂真实到赤裸的国产良心片，多希望你看不懂',
          img:'http://cookiezhang.com/imgs/vue2.jpg'
        }
      ],
      mode: 'inline',
    theme: 'light',
    }
  }
  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };
  render() {
    let { articleList } = this.state;
    let { list } = this.props;
    return (
      <div className='Informainleassay-box'>
        <Header />
        <div className='Informainleassay-contanier'>
          <div className='Informainleassay-main'>
           <div className='main-left-nav'>
           <Menu
           defaultSelectedKeys={['1']}
           defaultOpenKeys={['sub1']}
           mode={this.state.mode}
           theme={this.state.theme}
         >
          <Menu.Item key="1">
            All
          </Menu.Item>
          <Menu.Item key="2">
            CSS
          </Menu.Item>
          <Menu.Item key="3">
            Html5
          </Menu.Item>
          <Menu.Item key="4">
            Nodejs
          </Menu.Item>
          <Menu.Item key="5">
            Eggjs
          </Menu.Item>
          <Menu.Item key="6">
            Reactjs
          </Menu.Item>
          <Menu.Item key="7">
            Vuejs
          </Menu.Item>
          <Menu.Item key="8">
            Koa2js
          </Menu.Item>
          <Menu.Item key="9">
            TypeScript
          </Menu.Item>
         </Menu>
           </div>
           <div className='main-right-list'>
           {
            this.props.list.map((item, index) => {
              return(
                <div className='article-list-box' key={item.get('id')}>
                  <div className='article-list-contanier'>
                    <div className='article-list-words'>
                      <h2>{item.get('title')}</h2>
                      <div className='article-title'>{item.get('introduce')}</div>
                    </div>
                    <div className='dianzan'>
                      <Icon className='icon' type="heart" theme="twoTone" twoToneColor="#eb2f96" /> 
                      <Icon className='icon' type="like" theme="twoTone" twoToneColor="#eb2f96"  />
                      <Icon className='icon' type="dislike"  theme="twoTone" twoToneColor="#eb2f96" />
                      <Icon className='icon' type="github" />
                      <Icon className='icon' type="form"/>
                    </div>
                    <div className='article-list-img'>
                      <img src={item.get('coverImg')} />
                    </div>
                  </div>
                </div>
              )
            })
          }
           </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  };
  componentDidMount() {
    this.props.articleList();
  };
  
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['informaineassay','list']),
  }
}
const mapDispatchToProps  = (dispatch) => {
  return {
    articleList(){
      dispatch(actionCreators.getHomeInfor());
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Informainleassay)