import { combineReducers } from 'redux'
import counterReducer from './counter'
import isLoggedReducer from './isLogged'


// here you insert all the reducers you created and we combine them with (CombineReducers)
// you can name them whatever you like 
// i named the counterReducer -> counter 
// and the isLoggedreducer -> isLogged 
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
})

export default allReducers
