import Reducer from './Reducer';
import Reducer_sec from "./Reducer_sec";
import Reducer_thi from "./Reducer_thi";
import Reducer_four from "./Reducer_four";
import Reducer_fifth from "./Reducer_fifth";

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    img:Reducer,
    detail:Reducer_sec,
    users:Reducer_thi,
    following:Reducer_four,
    posts:Reducer_fifth
})

export default allReducers