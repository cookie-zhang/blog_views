import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
import { api } from '../../../utils/index'

const lettcodeListData = (result)=> ({
    type: actionTypes.LETTCODE_LIST_DATA,
    list: fromJS(result)
})
export const lettcodeList = ()=>{
    return (dispatch)=>{
        axios.post(api+'/lettcodeList').then((res)=>{
            let result = res.data.data;
            result = result.slice(0,10)
            dispatch(lettcodeListData(result));
        }).catch(()=>{
            console.log('erro1')
        })  
    }
}

