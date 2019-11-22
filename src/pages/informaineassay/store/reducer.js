import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
  list: [],
  curList:[],
  typeList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SUIBI_LIST_FILTER:
      return state.merge({
        curList: fromJS(action.filterList)
      })
    case actionTypes.SUIBI_LIST_DATA:
      return state.merge({
        curList: fromJS(action.list)
      })
    case actionTypes.SUIBI_LIST_TYPE:
      return state.merge({
        typeList: fromJS(action.typeList)
      })
    default:
      return state;
  }
}