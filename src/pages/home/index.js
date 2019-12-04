/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
class Home extends PureComponent {
    constructor(props,context) {
      super(props,context);
      this.state = { 
        flag: false,
        posFlag:false,
        sort:[
          {type:'CSS',content:'欢'},
          {type:'HTML5',content:'迎'},
          {type:'Nodejs',content:'光'},
          {type:'React',content:'临'},
          {type:'Vue',content:'寒'},
          {type:'Angular',content:'舍'},
          {type:'Eggjs',content:'一'},
          {type:'Koa2',content:'起'},
          {type:'Angular',content:'学'},
          {type:'Eggjs',content:'习'},
          {type:'Koa2',content:'吧'},
        ],
        bgList:[7,8,2,3,4,5,6],
       };
      setTimeout(() => {
        this.setState({
          flag: true
        })
      }, 100);

      setTimeout(() => {
        this.setState({
          posFlag: true
        })
      }, 1000);
      this.letfunction = this.letfunction.bind(this);
    } 

    letfunction(){
      return Math.ceil(-Math.random()*800)+'px'
    }


  render() {
      const pos = {
        position: this.state.posFlag === true ? 'none': 'adsolute'
      }
    return (
        <div className='home-contanier'>
        {
          this.state.bgList.map((item,index)=>
            <img  key={index} className={['bg_position bg_img'+item+' ', this.state.flag === true? 'end':''].join('')} src={require('../../static/img/bgimg'+item+'.png')} />
          )
        }
          <div className='home-head'>
              <div className='show'>
                <img src={require('../../static/img/laodi.png')} />
              </div>
              <div className='send-word'>
                <div className='firstname'>我姓张 ！</div>
                <div className='lastname'>但我从不张狂 ！</div>
              </div>
              <div className='btn-swich'>
              <Link to={'/'}><Button className='home' type="primary">首页</Button></Link>
              <Link to={'/blog'}><Button className='blog' type="primary">博客</Button></Link>
              </div>
          </div>
          <div className='home-main'>
            <div className='main-list'>
              <ul>
               {
                this.state.sort.map((item,index)=>{
                  return(
                    <li key={index} className={this.state.posFlag === true ? 'end':''} style={{pos}}>
                      <Link to={'/informaineassay'}>
                        {item.type}
                        <p style={{fontSize:'18px'}}>{item.content}</p>
                      </Link>
                    </li>
                  )
                })
               }
              </ul>
            </div>
          </div>
        </div>
    )
  }
}
export default Home