import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const store = createStore(reducer)

export default store