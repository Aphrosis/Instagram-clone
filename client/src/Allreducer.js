import Reducer from './Reducer';
import Reducer_sec from "./Reducer_sec";
import Reducer_thi from "./Reducer_thi";

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    img:Reducer,
    detail:Reducer_sec,
    users:Reducer_thi
})

export default allReducers