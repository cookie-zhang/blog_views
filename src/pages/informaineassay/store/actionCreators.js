import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
const api = 'http://localhost:7002'

const articleList = (result)=> ({
    type: actionTypes.SUIBI_LIST_DATA,
    list:fromJS(result)
})
export const getHomeInfor = ()=>{
    return (dispatch)=>{
        axios.post(api+'/articleList').then((res)=>{
            const result = res.data.data;
            dispatch(articleList(result));
        }).catch(()=>{
            console.log('erro1')
        })  
    }
}
