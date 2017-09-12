import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Slides } from '../components/common';

const SLIDE_DATA = [
  { text: 'Welcome to Manager app', color: '#03A9F4' },
  { text: 'Use this to manage your employees', color: '#009688' },
  { text: 'With manager app managing your employees is a piece of cake...', color: '#03A9F4' }
];

class Welcome extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <Slides data={SLIDE_DATA} onComplete={() => navigate('Auth')} />
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
export default Welcome;
