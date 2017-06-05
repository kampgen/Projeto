import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class Lista extends Component {
  render() {
    return (
		<View style={styles.container}>
			<Text>Teste</Text>
      <Button title="teste" onPress={() => false}></Button>
		</View>
	)
}
}

const styles = StyleSheet.create({
})
