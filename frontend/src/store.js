import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {recipeRandomReducer, recipeSearchReducer} from './reducers/recipeReducer'

const reducer = combineReducers({
    recipeList: recipeRandomReducer,
    recipeSearch: recipeSearchReducer
})

const initialState={}
const middleware= [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )


export default store