import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './midddleware/logger';
import authenticationReducer from './authentication/reducer';
import blogReducer from './blog/reducer';

const reducers = combineReducers({
   authentication : authenticationReducer,
   blog : blogReducer
})

const configureStore = (preloadedState? : any) => {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducers, preloadedState, composedEnhancers)

  return store
}

export default configureStore;