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

//获取点赞  
const dianzanData = (result)=>({
  type: actionTypes.DIANZAN,
  like: fromJS(result)
})
export const dianzan = (data)=>{
    return (dispatch)=>{
      axios.post(api+'/dianzan', {id:data}).then((res)=>{
        let data = res.data.data
        dispatch(dianzanData(data))
      }).catch(()=>{
          console.log('erro1')
      })  
    }
}

const updateDianzanData = (result)=>({
  type: actionTypes.UPDATE_DIANZAN,
  like: fromJS(result)
})
export const updateDianzan = (data)=>{
    return (dispatch)=>{
      data.like++
      axios.post(api+'/dianzanUpdate', data).then((res)=>{
        let datas = res.data.data
        dispatch(updateDianzanData(datas))
        axios.post(api+'/updatearticle', data).then((res)=>{
        })
      }).catch(()=>{
      })  
    }
}