import { combineReducers } from 'redux-immutable'; //将每个页面的store整合到一个总的里面，像极了vue中的moduleA  moudleB那种整合vuex数据；
import { reducer as  informaineassay} from '../pages/informaineassay/store'
import { reducer as blog  } from '../pages/blog/store'
import { reducer as detail  } from '../compontens/articleDetail/store'
import { reducer as lettcode  } from '../pages//lettcode/store'
const reducer = combineReducers({
    informaineassay: informaineassay,
    blog,
    detail,
    lettcode
})

export default reducer;