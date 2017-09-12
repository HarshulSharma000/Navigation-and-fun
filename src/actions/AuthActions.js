//@flow
import firebase from 'firebase';

import { LOGIN_SUCCESS, LOGIN_ATTEMPT, LOGIN_FAIL, WEAK_PASS } from '../actions/Types';
import { employeeFetch } from './EmployeeActions';

export const loginfail = (dispatch) => {
	dispatch({ type: LOGIN_FAIL });
};

export const loginsuccess = (dispatch, user) => {
	dispatch({ type: LOGIN_SUCCESS, payload: { user: user.uid } });
};

export const LoginAttempt = (email, password) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_ATTEMPT, payload: { email, password } });
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginsuccess(dispatch, user))
		.catch((error) => {
			console.log(error);
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginsuccess(dispatch, user))
			.catch((error) => {
				console.log(error); 
				if (error.code === 'auth/weak-password') {
					dispatch({ type: WEAK_PASS, payload: { error: error.message } });
				} else {
					loginfail(dispatch);
				}
			});
		});
	};
};
