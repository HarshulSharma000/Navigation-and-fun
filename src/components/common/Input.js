//@flow
import React,{Component} from 'react';
import {Text,TextInput,View} from 'react-native';

class Input extends Component{
    render(){
        const {label,value,onChangeText,placeholder,secureTextEntry} = this.props;
        const {inputStyle,labelStyle,containerStyle} = styles;
        return(
            <View style = {containerStyle}>
                <Text style = {labelStyle}>{label}</Text>
                <TextInput
                    placeholder = {placeholder}
                    secureTextEntry = {secureTextEntry}
                    autoCorrect = {false}
                    style = {inputStyle}
                    underlineColorAndroid = 'transparent'
                    value = {value}
                    onChangeText = {onChangeText}
                />
            </View>
        );
    }
} 

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        flex: 2
    },
    labelStyle:{
        fontSize: 22,
        paddingLeft:20,
        flex: 1
    },
    containerStyle:{
        height: 60,
        flex: 1,
        flexDirection:'row',
        alignItems: 'center'
    }
}

export {Input};