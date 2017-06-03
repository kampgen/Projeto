import firebase from 'firebase'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class Lista extends Component {

  componentDidMount() {
    let config = {
    apiKey: "AIzaSyAnTjCT-1GYaSl0lueL6d_PpuDwLGOvDfM",
    authDomain: "projeto-301d5.firebaseapp.com",
    databaseURL: "https://projeto-301d5.firebaseio.com",
    projectId: "projeto-301d5",
    storageBucket: "projeto-301d5.appspot.com",
    messagingSenderId: "1047111331002"
    }
      firebase.initializeApp(config);
  }

  // listarDados(){
	// 	let pontuacao = firebase.database().ref("pontuacao")
  // 		// alert( snapshot.val() )
	// 	pontuacao.on('value', (snapshot) => {
	// 		let pontos = snapshot.val()
	// 		this.setState( {pontuacao: pontos} )
	// 	})
	// }
  //
  // listarAnimais() {
  //   console.warn("aqui")
  //   let animais = firebase.database().ref("Animais")
  //   animais.on('value', (snapshot) => {
  //     let obj = snapshot.val()
  //     this.setState({objeto: obj})
  //   }
  // )
  // }

  render() {
    return (
		<View style={styles.container}>
			<Text>Teste</Text>
      <Button title="teste" onPress={() => this.listarAnimais()}></Button>
		</View>
	)
}
}

const styles = StyleSheet.create({
})
