//@flow
import React, {Component} from 'react';
import { View, Text} from 'react-native';

class CardSection extends Component{
    render() {
        return(
            <View style = { styles.containerStyle}>
                    {this.props.children}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ccced1',
        position: 'relative',
        padding: 10
    }
}
export { CardSection };