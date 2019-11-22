import React, { PureComponent } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import './index.scss'
class articleDetail extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getArticleDetail(id);
  }
  render() {
    let detail = this.props.detail
    return (
      <div className="detail-box">
        <Header />
        <div className='detail-container'>
          <div className="title">
            <h1>{detail.get('title')}</h1>
          </div>
          <div className="up-title">
            <span>作者：{detail.get('author')}</span>
            <span>创建时间：{detail.get('createdAt')}</span>
            <span>分类：{detail.get('sortName')}</span>
            <span>类型：{detail.get('typeName')}</span>
          </div>
          <div className='coverImg'>
            <img src={detail.get('coverImg')} />
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
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //文章
    getArticleDetail(id){
      dispatch(actionCreators.articleDetail(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(articleDetail)