import firebase from 'firebase';
import {
    EMPLOYEES_FETCH_SUCCESS
} from './Types';

export const employeesFetch = () => {
    return async (dispatch) => {
         const { currentUser } = firebase.auth();
         firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
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

export const employeeEdit = ({ Name, Phone, Shift, uid }) => {
    return () => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ Name, Phone, Shift })
        .then(
            
        );
    };
};

export const employeeDelete = ({ uid, navigation }) => {
    return () => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(navigation.goBack);
    };
};
