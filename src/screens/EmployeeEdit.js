import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Modal, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';

import EmployeeForm from '../components/EmployeeForm';
import { CardSection } from '../components/common';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class EmployeeEdit extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    state = { enabled: false, showModal: false };
    componentWillMount() {
        this.setState(this.props.navigation.state.params.value);
    }

    sendText() {
        const { Phone, Shift } = this.state;
        text(`${Phone}`, `Your shift is on ${Shift}`);
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
                onPress={this.sendText.bind(this)} 
                />
                <Button
                title='Fire'
                large
                buttonStyle={{ width: SCREEN_WIDTH }} 
                onPress={() => {
                     Alert.alert(
                        'Are you sure?',
                        `Poor ${this.state.Name} has nowhere to go... :(`,
                        [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => this.props.employeeDelete({ ...this.state, navigation: this.props.navigation }) },
                        ],
                        { cancelable: false }
                    );
                }}  
                />
            </View>
        );
    }
    render() {
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
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgb(244, 245, 247)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export default connect(null, actions)(EmployeeEdit);
