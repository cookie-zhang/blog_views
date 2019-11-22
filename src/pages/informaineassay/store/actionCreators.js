import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
import { api } from '../../../utils/index'

const articleList = (result)=> ({
    type: actionTypes.SUIBI_LIST_DATA,
    list: fromJS(result)
})
const articleListHelp = {
    allList:[]
}
const articleTypeList = (result)=> ({
    type: actionTypes.SUIBI_LIST_TYPE,
    typeList: fromJS(result)
})
export const getsuibiList = ()=>{
    return (dispatch)=>{
        axios.post(api+'/articleList').then((res)=>{
            const result = res.data.data;
            articleListHelp.allList = result;
            dispatch(articleList(result));
        }).catch(()=>{
            console.log('erro1')
        })  
    }
}

export const getarticleTypeList = () => {
    return (dispatch)=>{
        axios.post(api+'/classificationList').then((res)=>{
            const result = res.data.data;
            dispatch(articleTypeList(result));
        }).catch(()=>{
            console.log('erro1')
        })  
    }
}

const filterList = (fliterList)=> ({
    type: actionTypes.SUIBI_LIST_FILTER,
    filterList: fromJS(fliterList || [])
})

export const getFilterList = (type) => {
    return (dispatch)=>{
        if(type == 0){
            dispatch(filterList(articleListHelp.allList));
        }else{
            let arr = []
            articleListHelp.allList.map((item) => {
                if(type == item.sort){
                    arr.push(item)
                }
            });
            dispatch(filterList(arr));
        }
    }
}
