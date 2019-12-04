import React, { PureComponent } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import moment from 'moment';
import { actionCreators } from './store'
import { actionCreatorsB } from '../../pages/blog/store'
import { connect } from 'react-redux'
import { BackTop,Icon } from 'antd';
import './index.scss'
class articleDetail extends PureComponent {
  constructor(props) {
    super();
    this.handleCollection = this.handleCollection.bind(this)
  
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getArticleDetail(id,1);
  }
  handleCollection(id,likes, e){
    let data = {
      id: id,
      like: likes,
    }
    this.props.goods(data)
    setTimeout(()=>{
      this.props.flag.map( item => {
        if(item.get('flag') == 1){
          let id = this.props.match.params.id;
          this.props.getArticleDetail(id, 0)
        }
      })
    },100)
  }
  render() {
    let detail = this.props.detail
    return (
      <div className="detail-box">
      <BackTop></BackTop>
        <Header />
        <div className='detail-container'>
          <div className="title">
            <h1>{detail.get('title')}</h1>
          </div>
          <div className="up-title">
            <span>作者：{detail.get('author')}</span>
            <span>创建时间：{moment(detail.get('createDate')).format('YYYY-MM-DD HH:mm:ss')}</span>
            <span>更新时间：{moment(detail.get('updateDate')).format('YYYY-MM-DD HH:mm:ss')}</span>
            <span>分类：{detail.get('sortName')}</span>
            <span>类型：{detail.get('typeName')}</span>
          </div>
          <div className='coverImg'>
            <img src={detail.get('coverImg')} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: detail.get('content') }}></div>
          <div className='ding'>
            <span><Icon className='icon' type="eye" theme="twoTone" twoToneColor="#eb2f96"></Icon>{detail.get('looks')}</span><br/>
            <span><Icon onClick={this.handleCollection.bind(this, detail.get('id'), detail.get('like')) } datatype={detail.get('id')} className='icon' type="like" theme="twoTone" twoToneColor="#eb2f96"></Icon>{detail.get('like')}</span>
          </div>
        </div>
      <Footer />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.getIn(['detail','detail']),
    flag: state.getIn(['blog','flag']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //文章
    getArticleDetail(id, flag){
      dispatch(actionCreators.articleDetail(id, flag))
    },
     //点赞
     goods(data){
      dispatch(actionCreatorsB.getlikes(data));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(articleDetail)