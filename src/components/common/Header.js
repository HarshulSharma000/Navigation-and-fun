//@flow
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Header extends Component{
    render(){
        const {textStyle, viewStyle} = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>
                    {this.props.headText}
                </Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#2b76ef',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        elevation: 15
    },
    textStyle: {
        fontSize: 20
    }
};
export  { Header };