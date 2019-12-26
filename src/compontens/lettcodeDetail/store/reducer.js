import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
 detail:{},
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.BLOG_ARTICLE_DETAIL:
      return state.merge({
        detail: fromJS(action.detail)
      })
    default:
      return state;
  }
}