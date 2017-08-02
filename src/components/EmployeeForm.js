import React, { Component } from 'react';
import { View, Text, Picker, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection, Input } from './common';

const SCREEN_WIDTH = Dimensions.get('window').width;

class EmployeeForm extends Component {
  static defaultProps = {
    enabled: true
  };
  render() {
    const { enabled } = this.props;
    return (
      <View style={{ flex: 1, width: SCREEN_WIDTH - 20 }}>
        <CardSection>
          <Input
            label="Name"
            placeholder="You Know Who..."
            value={this.props.value.Name}
            editable={enabled}
            onChangeText={value => { this.props.setValue({ Name: value }); }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="9711548769"
            value={this.props.value.Phone}
            keyboardType={'numeric'}
            editable={enabled}
            onChangeText={value => { this.props.setValue({ Phone: value }); }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 2 }}
            selectedValue={this.props.value.Shift}
            enabled={enabled}
            onValueChange={value => { this.props.setValue({ Shift: value }); }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>

    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 10
  }
};

export default connect(null, actions)(EmployeeForm);
