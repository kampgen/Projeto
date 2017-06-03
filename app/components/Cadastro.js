import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';
import { defaultColor, secondColor, thirdColor } from '../constants.js'

const userImg = require('../images/user.png')
const passwordImg = require('../images/password.png')

export default class Login extends Component {
  constructor(props) {
  super(props)

  this.state = {
    nome: 'vinicius',
    porte: '',

  }

}

  render() {
    return (
		<View style={styles.container}>
			<View style={styles.formulario}>
				<View style={styles.box}>
					<View style={styles.inputText}>
						<TextInput placeholder='Nome (Caso houver)'></TextInput>
					</View>
				</View>

        <View style={styles.box}>
          <View style={styles.inputText}>
            <TextInput placeholder='Porte'></TextInput>
          </View>
        </View>

				<View style={styles.box}>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.inputText}>
						<TextInput placeholder='Password'></TextInput>
					</View>
				</View>
				<View style={styles.button}>
					<Button color={defaultColor} title='Cadastrar' onPress={() => false}></Button>
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
    backgroundColor: thirdColor,
	  alignSelf: 'stretch'
    },
	formulario: {
		flex: 1,
		maxHeight: 500,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
    paddingHorizontal: 20
		},
	box: {
	  flex: 1,
	  maxHeight: 75,
	  alignSelf: 'stretch',
	  flexDirection: 'row',
	  alignItems: 'center',
	  justifyContent: 'center'
    },
	inputText: {
		backgroundColor: 'white',
		borderWidth: 3,
		borderColor: 'grey',
		flex: 0.5,
		height: 70,
		paddingHorizontal: 10,
	},
	button: {
		margin: 20,
		width: 300,
	}
})
