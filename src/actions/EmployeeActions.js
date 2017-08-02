import firebase from 'firebase';
import {
    EMPLOYEES_FETCH_SUCCESS
} from './Types';

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(currentUser.uid);
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }); 
        });
    };
};

export const employeeCreate = ({ Name, Phone, Shift, navigation }) => {
    return () => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ Name, Phone, Shift });
        navigation.goBack();
    };
};
