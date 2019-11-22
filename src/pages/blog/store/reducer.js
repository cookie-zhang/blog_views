import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
  words: [],
  list:[],
  timeList:[]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.BLOG_WORDS:
      return state.merge({
        words: fromJS(action.words)
      })
      case actionTypes.BLOG_ARTICLE_LIST:
      return state.merge({
        list: fromJS(action.list),
        timeList: fromJS(action.timeList)
      })
    default:
      return state;
  }
}