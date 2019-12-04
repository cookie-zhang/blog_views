import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
  words: [],
  list:[],
  timeList:[],
  flag: 0
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
      case actionTypes.BLOG_LIKES:
          return state.merge({
            flag: fromJS(action.flag),
          })
    default:
      return state;
  }
}