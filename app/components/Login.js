import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
	Image,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { defaultColor, secondColor, thirdColor } from '../constants.js'

const userImg = require('../images/user.png')
const logo = require('../images/logodoacao.png')
const passwordImg = require('../images/password.png')

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
		  <View style={styles.imgLogo}>
      <Image source={logo} style={{flex: 1}}/>
      </View>
		  <View style={styles.formulario}>
			  <View style={styles.box}>
				  <View style={styles.boxImg}>
					  <Image source={userImg} style={styles.userIcon}/>
				  </View>
				  <View style={styles.inputText}>
					  <TextInput placeholder='Login' ></TextInput>
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
        <View style={styles.loginButtonBox}>
        <View style={{marginHorizontal: 50, alignSelf: 'stretch', flex: 1}}>
        <Button title="logar" color={defaultColor} onPress={() => Actions.formLista()}></Button>
        </View>
        </View>
		  </View>
		  <View style={styles.footer}>
			  <Text style={{fontSize: 20}}>Copyright Teste 2017</Text>
		  </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: thirdColor,
  },
  imgLogo: {
	  flex: 5,
	  alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  formulario:{
	flex: 5,
	height: 100,
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'center',
  },
  box: {
	  flex: 1,
	  maxHeight: 80,
	  alignSelf: 'stretch',
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
  loginButtonBox: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10
  },
  footer: {
	  flex: 1,
	  alignSelf: 'stretch',
	  alignItems: 'center',
	  justifyContent: 'center'
  }
})