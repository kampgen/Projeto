import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { fetchAll, novoAnimal } from './Firebase'
import { defaultColor, secondColor, thirdColor } from '../constants.js'
import { Actions } from 'react-native-router-flux'


export default class Lista extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        fetchAll().then(lista => {
            let arr = Object.keys(lista).map(k => lista[k])
            this.setState({ lista: arr}, () => console.log(this.state.lista))
        })
    }

    _handleList(l, id) {
        return(
            <TouchableHighlight key={id} onPress={() => Actions.animal(animal = l)}>
                <View style={styles.eachItem}>
                    <View style={{marginTop: 10}}>
                        <Text style={{ fontSize: 22 }}>Idade: {l.Idade}    Porte: {l.Porte}</Text>
                        <Text style={{ fontSize: 22 }}>Raça: {l.Raca}</Text>
                    </View>
                        <Image style={[styles.imageBox, { width: 100, height: 80 }]} source={{uri: l.Foto}}/>
                </View>
            </TouchableHighlight>
        )
    }

  render() {
    return (
		<View style={styles.container}>
            <Button color={defaultColor} title='clique aqui para Doar um animal' onPress={() => Actions.formCadastroAnimal()}/>
            <ScrollView style={styles.lista}>
                {this.state.lista.map((l, id) => this._handleList(l, id))}
            </ScrollView>
		</View>
	)
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: thirdColor,
        alignSelf: 'stretch',
        marginTop: 55
    },
    lista: {
        flex: 1,
        backgroundColor: thirdColor
    },
    eachItem: {
        flex: 1,
        maxHeight: 100,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    imageBox: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5
    }
})
