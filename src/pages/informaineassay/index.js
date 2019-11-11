import React, { PureComponent } from 'react';
import Header from '../../compontens/header/header'
import './index.scss'
import { Icon  } from 'antd';

class Informainleassay extends PureComponent {
  // eslint-disable-next-line no-useless-constructor
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
      ]
    }
  }
  render() {
    let { articleList } = this.state;
    return (
      <div className='Informainleassay-box'>
        <Header />
        <div className='Informainleassay-contanier'>
          <div className='Informainleassay-main'>
           <div className='main-left-nav'>
              <div className='nav-item'>All</div>
              <div className='nav-item'>CSS</div>
              <div className='nav-item'>Html5</div>
              <div className='nav-item'>Vuejs</div>
              <div className='nav-item'>Reactjs</div>
              <div className='nav-item'>Koa2js</div>
              <div className='nav-item'>Eggjs</div>
           </div>
           <div className='main-right-list'>
           {
            articleList.map((item, index) => {
              return(
                <div className='article-list-box' key={index}>
                  <div className='article-list-contanier'>
                    <div className='article-list-words'>
                      <h2>{item.title}</h2>
                      <div className='article-title'>{item.content}</div>
                    </div>
                    <div className='dianzan'>
                      <Icon className='icon' type="heart" theme="twoTone" twoToneColor="#eb2f96" /> 
                      <Icon className='icon' type="like" theme="twoTone" twoToneColor="#eb2f96"  />
                      <Icon className='icon' type="dislike"  theme="twoTone" twoToneColor="#eb2f96" />
                      <Icon className='icon' type="github" />
                      <Icon className='icon' type="form"/>
                    </div>
                    <div className='article-list-img'>
                      <img src={item.img} />
                    </div>
                  </div>
                </div>
              )
            })
          }
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Informainleassay