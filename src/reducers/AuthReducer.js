//@flow
import { LOGIN_SUCCESS,LOGIN_ATTEMPT, LOGIN_FAIL, WEAK_PASS } from '../actions/Types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default AuthReducer = (state = INITIAL_STATE, action) => {
	const stateChange = action.payload;
	switch (action.type) {
		case LOGIN_ATTEMPT:
			return { ...state, ...stateChange, loading: true, error: '', user: null };
		case LOGIN_SUCCESS:
			return { ...state, user: stateChange.user, loading: false };
		case LOGIN_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };
		case WEAK_PASS:
			return { ...state, error: stateChange.error, password: '', loading: false };
		default:
			return state;
	}
}