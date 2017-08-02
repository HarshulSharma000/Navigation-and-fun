import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { CardSection } from './common';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ListItem extends Component {
    render() {
        const { Name, Phone } = this.props.employee;
        const { employee, navigation } = this.props;
        return (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { value: employee })}>
                    <CardSection style={{ flexdirection: 'column', justifyConent: 'flex-start' }}> 
                        <View style={{ width: SCREEN_WIDTH - 10 }}>  
                            <Text style={{ fontSize: 20 }}> {Name} </Text>
                        </View>
                        <View>
                            <Text> {Phone} </Text>
                        </View>
                    </CardSection>
                </TouchableOpacity>
        );
    }
}

export default ListItem;
