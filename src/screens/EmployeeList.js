import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, Platform, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import firebase from 'firebase';

import * as actions from '../actions';
import ListItem from '../components/ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: 'Employees',
            headerRight: <Button title='Add' onPress={() => navigation.navigate('Create')} />,
            style: {
                paddingTop: 40
            }
        });
     componentWillMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {

            } else {
                await AsyncStorage.removeItem('jwt');
                // No user is signed in.
            }
            this.props.employeesFetch();
        });
        //this.props.employeesFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }
    renderRow(employee) {
        return (
            <ListItem employee={employee} navigation={this.props.navigation} />
        );
    }
    render() {
        return (
            <View style={styles.container} >
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
                />
                <Button 
                title='signout?' 
                onPress={() => { 
                    firebase.auth().signOut();
                    this.props.navigation.navigate('Auth');
                }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
