import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import EmployeeForm from '../components/EmployeeForm';

class EmployeeEdit extends Component {
    static navigationOptions = () => ({
        title: 'Editing Screen'
    });
    state = { enabled: false };
    componentWillMount() {
        this.setState(this.props.navigation.state.params.value);
    }
    renderButtons() {
        return (
            <Button title='Edit' onPress={this.setState({ enabled: true })} />
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
                <Text> Full fun </Text>
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

export default EmployeeEdit;
