import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = [thunk]
const intialState = {}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer(),
  intialState,
  //   applyMiddleware(...middleware)
  composeEnhancers(applyMiddleware(...middleware))
)

store.asyncReducers = {}

/*eslint-disable*/
if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(createReducer(store.injectedReducers))
  })
}
/**eslint-enable */
export default store
