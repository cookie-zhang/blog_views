import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
import { api } from '../../../utils/index'


const articleDetailData = (result)=> ({
  type: actionTypes.BLOG_ARTICLE_DETAIL,
  detail: fromJS(result),
})

export const articleDetail = (id, flag)=>{
  return (dispatch)=>{
      axios.get(api+'/articleDetail?id='+id).then((res)=>{
          const result = res.data.data;
          result.looks++
          dispatch(articleDetailData(result))
          if(flag == 1){
            let data = {
              id: id,
              looks: result.looks
            }
            axios.post(api+'/updatearticle', data).then((res)=>{
              console.log('200')
            })
          }
         
      }).catch(()=>{
          console.log('erro1')
      })  
  }
}