import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';


export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        auth: AuthReducer,
        employees: EmployeeReducer
    });
}
