import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    list: [],
})
export default (state = defaultState, action)=>{
    console.log(action)
    debugger
    switch(action.type){
        case action.type://actionTypes.SUIBI_LIST_DATA:
            debugger
         return state.merge({
            list: fromJS(action.list)
            })
        default:
            return state;
    }
}