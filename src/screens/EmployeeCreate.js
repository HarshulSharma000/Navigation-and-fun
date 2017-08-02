import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import EmployeeForm from '../components/EmployeeForm';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Welcome extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Enter Details'
    });
    state = { Name: '', Phone: '', Shift: 'Monday' };
    render() {
        return (
            <View style={styles.container} >
                <EmployeeForm 
                setValue={(states) => { this.setState(states); return { ...states }; }}
                value={this.state}
                />
                <Button 
                title='Done' 
                buttonStyle={{ marginBottom: 200, width: SCREEN_WIDTH - 20 }} 
                onPress={() => this.props.employeeCreate({ ...this.state, navigation: this.props.navigation })}
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
    justifyContent: 'center',
  },
});

export default connect(null, actions)(Welcome);
