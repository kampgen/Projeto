import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';

const userImg = require('../images/user.png')
const passwordImg = require('../images/password.png')

export default class Login extends Component {
  render() {
    return (
		<View style={styles.container}>
			<View style={styles.formulario}>
				<Text style={styles.title}>Cadastro</Text>

				<View style={styles.box}>
					<View style={styles.boxImg}>
						<Image source={passwordImg} style={styles.passwordIcon}/>
					</View>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.boxImg}>
						<Image source={passwordImg} style={styles.passwordIcon}/>
					</View>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.boxImg}>
						<Image source={passwordImg} style={styles.passwordIcon}/>
					</View>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.boxImg}>
						<Image source={passwordImg} style={styles.passwordIcon}/>
					</View>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>
				<View style={styles.buttons}>
					<Button color='#1e90ff' title='Voltar' onPress={() => console.log('nada')}></Button>
					<Button color='#1e90ff' title='Cadastrar' onPress={() => console.log('nada')}></Button>
				</View>
			</View>
		</View>
	)
}
}

const styles = StyleSheet.create({
	container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
	  alignSelf: 'stretch'
    },
	formulario: {
		flex: 1,
		maxHeight: 500,
		backgroundColor: '#a9a9a9',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center'
		},
	title: {
		fontSize: 30,
		color: 'grey',
		marginBottom: 20
	},
	box: {
  	  flex: 1,
  	  maxHeight: 75,
  	  alignSelf: 'stretch',
  	  backgroundColor: '#bdb76b',
  	  flexDirection: 'row',
  	  alignItems: 'center',
  	  justifyContent: 'center'
    },
    boxImg: {
  	width: 70,
  	height: 70,
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor: 'white',
  	borderWidth: 3,
  	borderColor: 'grey',
  	marginLeft: 30
    },
    userIcon: {
  	  height: 40,
  	  width: 35
    },
    passwordIcon: {
  	  height: 40,
  	  width: 30
    },
	inputText: {
		backgroundColor: 'white',
		borderWidth: 3,
		borderColor: 'grey',
		flex: 0.5,
		height: 70,
		marginRight: 30,
		paddingHorizontal: 20
	},
	buttons: {
		margin: 20,
		width: 300,
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	button: {
		width: 200
	}
})
