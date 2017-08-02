import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import ListItem from '../components/ListItem';

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
    renderRow(employee) {
        return (
            <ListItem employee={employee} navigation={this.props.navigation} />
        );
    }
    render() {
        console.log(this.state);
        return (
            <View style={styles.container} >
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
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
