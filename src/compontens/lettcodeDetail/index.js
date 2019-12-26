import React, { PureComponent } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import moment from 'moment';
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { BackTop } from 'antd';
import './index.scss'
class articleDetail extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getArticleDetail(id,1);
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
            <span>创建时间：{moment(Number(detail.get('createDate'))).format('YYYY-MM-DD HH:mm:ss')}</span>
            <span>更新时间：{ Number(detail.get('updateDate')) ? moment(Number(detail.get('updateDate'))).format('YYYY-MM-DD HH:mm:ss'):'--'}</span>
            <span>分类：{detail.get('sortName')}</span>
            <span>类型：{detail.get('typeName')}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: detail.get('content') }}></div>
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
    like: state.getIn(['detail','like']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //文章
    getArticleDetail(id, flag){
      dispatch(actionCreators.articleDetail(id, flag))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(articleDetail)