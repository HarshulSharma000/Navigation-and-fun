import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: 'Employees',
            headerRight: <Button title='Add' onPress={() => navigation.navigate('Create')} />,
            style: {
                marginTop: Platform.OS === 'Android' ? 40 : 0
            }
        });

    componentWillMount() {
        this.props.employeesFetch();
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
    render() {
        return (
            <View style={styles.container} >
                <Text> Welcome to the list </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
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
