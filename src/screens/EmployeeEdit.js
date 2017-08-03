import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import EmployeeForm from '../components/EmployeeForm';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class EmployeeEdit extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    state = { enabled: false };
    componentWillMount() {
        this.setState(this.props.navigation.state.params.value);
    }
    renderButtons() {
        const { setParams } = this.props.navigation;
        if (this.state.enabled) {
            return (
                <Button 
                title='Save' 
                large 
                buttonStyle={{ width: SCREEN_WIDTH }} 
                onPress={() => { 
                    this.props.employeeEdit(this.state);
                    this.setState({ enabled: !this.state.enabled }); 
                    setParams({ title: 'Display' }); 
                }} 
                />
            );
        }
        
        return (
            <View>
                <Button
                title='Edit'
                large
                buttonStyle={{ width: SCREEN_WIDTH }} 
                onPress={() => { 
                    this.setState({ enabled: !this.state.enabled }); 
                    setParams({ title: 'Editing Screens' }); 
                }} 
                />
                <Button
                title='Text'
                large
                buttonStyle={{ width: SCREEN_WIDTH }} 
                onPress={() => {}} 
                />
                <Button
                title='Fire'
                large
                buttonStyle={{ width: SCREEN_WIDTH }} 
                onPress={() => {
                    this.props.employeeDelete({ ...this.state, navigation: this.props.navigation }); 
                }}  
                />
            </View>
        );
    }
    render() {
        console.log(this.state);
        return (
            <View style={styles.container} >
               
                <EmployeeForm 
                setValue={(states) => { this.setState(states); return { ...states }; }}
                value={this.state}
                enabled={this.state.enabled}
                />
                {this.renderButtons()}
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

export default connect(null, actions)(EmployeeEdit);
