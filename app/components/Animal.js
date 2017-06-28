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
    import { logarUsuario } from './Firebase.js'

    const userImg = require('../images/user.png')
    const logo = require('../images/logodoacao.png')
    const passwordImg = require('../images/password.png')

    export default class Animal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            idade: '',
            porte: 'm',
            descricao: '',
            raca: '',
        }
    }

    componentDidMount() {
        console.log(animal);
        this.setState({
            nome: animal.Nome,
            idade: animal.Idate,
            porte: animal.Porte,
            descricao: animal.Descricao,
            raca: animal.Raca,
            foto: animal.Foto
        })
    }
      render() {
        return (
          <View style={styles.container}>
            { this.state.nome != '' && <Text style={{marginTop: 20, fontSize: 30}}>{this.state.nome}</Text> }

    		<View style={styles.imgLogo}>
                <Image source={{uri: this.state.foto}} style={{width: 200, height: 200}}/>
            </View>
    		<View style={styles.formulario}>
                <Text>Idade: {this.state.Idade}</Text>
                <Text>Porte: {this.state.porte}</Text>
                <Text>Raça: {this.state.raca}</Text>
                <Text>{this.state.descricao}</Text>
    		</View>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: thirdColor,
      },
      imgLogo: {
    	  flex: 5,
    	  alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },
      formulario:{
    	flex: 5,
    	height: 100,
    	alignSelf: 'stretch',
    	alignItems: 'center',
    	justifyContent: 'center',
      }
    })
