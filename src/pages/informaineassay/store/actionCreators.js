import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
const api = 'http://localhost:7001'

const articleList = (result)=> ({
    type: actionTypes.SUIBI_LIST_DATA,
    list:fromJS(result)
})
export const getHomeInfor = ()=>{
    debugger
    return (dispatch)=>{
        axios.post(api+'/articleList').then((res)=>{
            debugger
            const result = res.data.data;

            console.log(result)
            debugger
            dispatch(articleList(result));
        }).catch(()=>{
            console.log('erro1')
        })  
    }
}
