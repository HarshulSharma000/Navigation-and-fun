//@flow
import React, {Component} from 'react';
import { Text, View } from 'react-native';



class Card extends Component{
    render() {
        return (
            <View style = {styles.containerStyle}> 
                {this.props.children}
            </ View>
        );
    }
}
export  { Card };

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 5,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
}