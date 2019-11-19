import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
const api = 'http://127.0.0.1:7002'

const articleList = (result)=> ({
    type: actionTypes.SUIBI_LIST_DATA,
    list: fromJS(result)
})
const articleTypeList = (result)=> ({
    type: actionTypes.SUIBI_LIST_TYPE,
    typeList: fromJS(result)
})
export const getsuibiList = ()=>{
    return (dispatch)=>{
        axios.post(api+'/articleList').then((res)=>{
            const result = res.data.data;
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

export const getFilterList = (allList,type) => {
    console.log(allList)
    return (dispatch)=>{
        if(type == 0){
            console.log(allList)
            dispatch(filterList(allList));
        }else{
            let arr = []
            allList.map((item,index) => {
                if(type == item.get('type')){
                    arr.push(item)
                }
            });
            console.log(allList)
            dispatch(filterList(arr));
        }


        
    }
}
