import Reducer from './Reducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    img:Reducer
})

export default allReducers