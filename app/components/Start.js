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
const logo = require('../images/logodoacao.png')
import { authTest } from './Firebase'

export default class Start extends Component {
  render() {
    return(
      <View style={styles.container}>
      <View style={styles.imgLogo}>
      <Image source={logo} style={{flex: 1}}/>
      </View>
      <View style={styles.buttons}>
      <Button title="logar" color={defaultColor} onPress={() => Actions.formLogin()}></Button>
      <Button title="cadastrar" color={defaultColor} onPress={() => Actions.formCadastro()}></Button>
      <Button title="logar sem se cadastrar" color={defaultColor} onPress={() => Actions.formLista()}></Button>
      </View>
      <View style={styles.footer}>
			  <Text style={{fontSize: 20}}>Copyright Teste 2017</Text>
		  </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: thirdColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgLogo: {
    flex: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  buttons: {
    flex: 3,
    height: 200,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  footer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
