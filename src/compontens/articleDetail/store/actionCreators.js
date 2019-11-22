import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
import { api } from '../../../utils/index'


const articleDetailData = (result)=> ({
  type: actionTypes.BLOG_ARTICLE_DETAIL,
  detail: fromJS(result),
})

export const articleDetail = (id)=>{
  return (dispatch)=>{
      axios.get(api+'/articleDetail?id='+id).then((res)=>{
          const result = res.data.data;
          dispatch(articleDetailData(result))
      }).catch(()=>{
          console.log('erro1')
      })  
  }
}