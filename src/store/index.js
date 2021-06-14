
import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
const enhance = applyMiddleware(thunkMiddleware)//在创建store时传入应用了middleware的enhance函数
const store = createStore(reducer,composeEnhancers(enhance))

export default store

