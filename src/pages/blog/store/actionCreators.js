import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
import { api } from '../../../utils/index'


const articleListData = (result)=> ({
  type: actionTypes.BLOG_ARTICLE_LIST,
  list: fromJS(result),
  timeList: fromJS(result.splice(0,4))
})

export const articleList = ()=>{
  return (dispatch)=>{
      axios.post(api+'/articleList').then((res)=>{
          const result = res.data.data;

          dispatch(articleListData(result))
      }).catch(()=>{
          console.log('erro1')
      })  
  }
}


const words = (result)=> ({
  type: actionTypes.BLOG_WORDS,
  words: fromJS(result)
})
export const getWords = ()=>{
  return (dispatch)=>{
      axios.post(api+'/getwordsList').then((res)=>{
        let arr = res.data.data;
        let result = [arr[Math.floor((Math.random()*arr.length))]]
        dispatch(words(result))
      }).catch(()=>{
          console.log('erro1')
      })  
  }
}