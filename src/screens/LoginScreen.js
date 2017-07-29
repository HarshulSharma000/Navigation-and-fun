//@flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from '../components/common';
import { LoginAttempt } from '../actions';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };
	
	componentWillMount() {
		const { email, password, error, loading } = this.props;
		this.setState({ email, password, error, loading });
	}

	componentWillReceiveProps(nextProps) {
		const { email, password, error, loading } = nextProps;
		this.setState({ email, password, error, loading });
	}

	onButtonPress() {
		this.props.LoginAttempt(this.state.email, this.state.password);
	}

	renderButton() {
		if (this.props.loading) {
			return ( 
				<View style={{ marginTop: 80 }}>
					<Spinner size="large" />
				</View>
			);	
		}

		return (
			<CardSection>
				<Button onPress={this.onButtonPress.bind(this)}>
					Log In
				</Button>
			</CardSection>
		);
	}
	render() {
		return (
			<View>
				<CardSection>
					<Input
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						label='Email:'
						placeholder='user@email.com'
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						secureTextEntry
						label="Password:"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<View>
					{this.renderButton()}
				</View>
				<View style={{ height: 40 }} />
				<View>
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>
				</View>
			</View>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const auth = state.auth;
	return { ...auth };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { LoginAttempt })(LoginForm);
