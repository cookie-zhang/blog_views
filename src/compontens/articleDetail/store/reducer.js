import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
 detail:{},
 like:{}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.BLOG_ARTICLE_DETAIL:
      return state.merge({
        detail: fromJS(action.detail)
      })
      case actionTypes.DIANZAN:
      return state.merge({
        like: fromJS(action.like)
      })
      case actionTypes.UPDATE_DIANZAN:
        return state.merge({
          like: fromJS(action.like)
        })
    default:
      return state;
  }
}