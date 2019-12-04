/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../compontens/header/header'
import Footer from '../../compontens/footer/footer'
import { actionCreators } from './store'
import { actionCreatorsB } from '../blog/store'
import { Link } from 'react-router-dom'
import './index.scss'
import { Menu, Icon, BackTop } from 'antd';

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
      <div className='Informainleassay-box'>
      <BackTop />
        <Header />
        <div className='Informainleassay-contanier'>
          <div className='Informainleassay-main'>
           <div className='main-left-nav'>
           <Menu
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              mode={this.state.mode}
              onClick={this.handleMenuItem}
              // theme={this.state.theme}
            >
         <Menu.Item key='0'>
            ALL
          </Menu.Item>
         {
           this.props.typeList.map((item,index)=>{
              return (
                <Menu.Item key={item.get('id')}>
                  {item.get('type')}
                </Menu.Item>
              )
           })
         }
         </Menu>
           </div>
           <div className='main-right-list'>
           {
            this.props.curList.map((item, index) => {
              return(
                <div className='article-list-box' key={item.get('id')}>
                  <div className='article-list-contanier'>
                    <div className='article-list-words'>
                    <Link to={'/detail/'+item.get('id') } style={{color: 'rgba(0, 0, 0, 0.65)'}}> 
                      <p><span className='isOrignal'>{item.get('isOriginal') === 1? '原创':'转载'}</span>{item.get('title')}</p>
                      <div className='article-title'>{item.get('introduce')}</div>
                      </Link>
                    </div>
                    <div className='dianzan'>
                      <span><Icon className='icon' type="eye" theme="twoTone" twoToneColor="#eb2f96"></Icon>{item.get('looks')}</span>
                      <span><Icon onClick={this.handleCollection.bind(this, item.get('id'), item.get('like')) } datatype={item.get('id')} className='icon' type="like" theme="twoTone" twoToneColor="#eb2f96"></Icon>{item.get('like')}</span>
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
    this.props.articleList();  // 初始化数据
    this.props.articleTypeList(); // 导航
  };
  
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['informaineassay','list']),
    typeList: state.getIn(['informaineassay','typeList']),
    curList: state.getIn(['informaineassay','curList']),
    flag: state.getIn(['blog','flag'])
  }
}
const mapDispatchToProps  = (dispatch) => {
  return {
    // 文章列表
    articleList(){
      dispatch(actionCreators.getsuibiList());
    },
    // 左边分类导航
    articleTypeList(){
      dispatch(actionCreators.getarticleTypeList());
    },
    //点击导航
    TypeList(typeItem){
      dispatch(actionCreators.getFilterList(typeItem));
    },
     //点赞
     goods(data){
      dispatch(actionCreatorsB.getlikes(data));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Informainleassay)