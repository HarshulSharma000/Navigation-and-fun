/**
 * Created by stan229 on 5/27/16.
 */
import { combineReducers } from 'redux';


export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer
    });
}
