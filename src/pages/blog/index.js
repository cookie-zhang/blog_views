/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import './index.scss'
import Head from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import { Icon,Calendar,Timeline,Divider,Button  } from 'antd';
import echarts from 'echarts';
import { Link } from 'react-router-dom'

var data = genData(50);
function genData(count) {
  var nameList = [
    'css', 'Html5', 'node', 'eggjs', 'koa2', 'vue', 'react'
  ];
  var legendData = [];
  var seriesData = [];
  var selected = {};
  for (var i = 0; i < 7; i++) {
      var name =nameList[i];
      legendData.push(name);
      seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
      });
  }

  return {
      legendData: legendData,
      seriesData: seriesData,
      selected: selected
  };
}
let echartsOption = {
  title : {
    text: 'Scale map',
    x:'center'
},
tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
},
legend: {
    type: 'scroll',
    right: 10,
    top: 30,
    bottom: 20,
    data: data.legendData,
    selected: data.selected
},
series : [
    {
        name: '姓名',
        type: 'pie',
        radius : '55%',
        center: ['40%', '50%'],
        data: data.seriesData,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
]
}

class Home extends PureComponent {
  constructor(props){
    super();
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
    this.onPanelChange = this.onPanelChange.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    
  }
  componentDidMount () {
    this.newGraph();
    this.props.getWords();
    this.props.getlist();
  }
  newGraph(){
      var myChart = echarts.init(document.getElementById('kidGraph'));
      myChart.setOption(echartsOption)
  }
  handleDetail(){

  }
  onPanelChange(value, mode){
    console.log(value, mode);
  }
  render() {
    return (
      <div className='blog-contanier'>
        <Head></Head>
        <div className='main-contanier'>
          <div className='main-box'>
          <div className='left-box'>
            <div className='day-talkshow'>
              <h2>每日一语</h2>
              <div className='talkshow'>
              {this.props.words.map(item=>{
                return (
                  <div>{item.get('words')}</div>
                )
              })}
              </div>
              <div className='talkAythor'>——张见飞</div>
            </div>
            <div className='calendar'>
              <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
            <div className='infomalessay-box'>
              <Divider  orientation="left"> <h2>亲随笔</h2></Divider>
              <div className='infomalessay-list-box'>
                <ul>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠
                  </li>
                </ul>
              </div>
            </div>

            <div className='infomalessay-box'>
              <Divider  orientation="left"> <h2>分类</h2></Divider>
              <div className='infomalessay-list-box'>
                <h3>css<span style={{fontSize:'12px',float:'right',cursor:'pointer'}}>更多》》</span></h3>
                <ul>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                </ul>
                <h3>html<span style={{fontSize:'12px',float:'right',cursor:'pointer'}}>更多》》</span></h3>
                <ul>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                </ul>
                <h3>Vue<span style={{fontSize:'12px',float:'right',cursor:'pointer'}}>更多》》</span></h3>
                <ul>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                  <li>
                    1.就暗杀圣诞节哈师大哈斯夺冠大哈斯夺冠
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className='center-box'>
          {
            this.props.list.map((item, index) => {
              return(
                <div className='article-list-box' key={item.get('id')}>
                <Link to={'/detail/'+item.get('id') } style={{color: 'rgba(0, 0, 0, 0.65)'}}> 
                  <div className='article-list-contanier'>
                    <div className='article-list-words' onClick={this.handleDetail}>
                      <p>{item.get('title')}</p>
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
                  </Link>
                </div>
              )
            })
          }
          <Button className='addmore-center-list'>加载更多》》》》</Button>
          </div>
          <div className='right-box'>
            <div className='timeline-box'>
                  {
                    this.props.timeList.map((item,index)=>{
                      return (
                        <Link to={'/detail/'+item.get('id') } style={{color: 'rgba(0, 0, 0, 0.65)'}}> 
                          <Timeline.Item className='timeLine'>
                            <p >{item.get('createdAt')}</p>
                            <div className='timeLineTile' style={{}}>
                              <span className='h4'>{item.get('title')}</span>
                              <div className='introduce' style={{fontSize:'12px'}}>{item.get('introduce')}</div>
                            </div>
                          </Timeline.Item>
                        </Link>
                      )
                    })
                  }
            </div>
            <div className='kidGraph-box'>
              <div id="kidGraph"></div>
            </div>
            
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.getIn(['blog','words']),
    list: state.getIn(['blog','list']),
    timeList: state.getIn(['blog','timeList']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //文章
    getlist(){
      dispatch(actionCreators.articleList())
    },
    // 每日一语
    getWords(){
      dispatch(actionCreators.getWords());
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)