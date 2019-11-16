import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    list: [],
})
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.SUIBI_LIST_DATA:
         return state.merge({
            list: fromJS(action.list)
            })
        default:
            return state;
    }
}