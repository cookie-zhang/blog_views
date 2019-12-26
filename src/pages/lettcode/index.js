/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import { actionCreators } from './store'
import { actionCreatorsB } from '../blog/store'
import { Link } from 'react-router-dom'
import './index.scss'
import { Icon, BackTop } from 'antd';

class Informainleassay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'inline',
      theme: 'light',
      articleList: props.list || []
    }
    this.handleMenuItem = this.handleMenuItem.bind(this)
    this.handleCollection = this.handleCollection.bind(this)
  }
  handleMenuItem(value){
    this.props.TypeList(value.key)
  }
  //点👍
  handleCollection(id,likes,e){
    let data = {
      id: id,
      like: likes
    }
    this.props.goods(data)
    setTimeout(()=>{
      this.props.flag.map( item => {
        if(item.get('flag') == 1){
          this.props.articleList()
        }
      })
    },100)
  }
  render() {
    return (
      <div className='lettcode-box'>
      <BackTop />
        <Header />
        <div className='lettcode-contanier'>
          <div className='lettcode-main'>
           <div className='main-right-list'>
           {
            this.props.list.map((item, index) => {
              return(
                <div className='article-list-box' key={item.get('id')}>
                  <div className='article-list-contanier'>
                    <div className='article-list-words'>
                    <Link to={'/lettcodeDetail/'+item.get('id') } style={{color: 'rgba(0, 0, 0, 0.65)'}}> 
                      <div className='article-title'>{(index+1+'、' ) + item.get('title')}</div>
                      </Link>
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
    this.props.lettcodeList();  // 初始化数据
  };
  
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['lettcode','list']),
  }
}
const mapDispatchToProps  = (dispatch) => {
  return {
    // 力扣列表
    lettcodeList(){
      dispatch(actionCreators.lettcodeList());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Informainleassay)