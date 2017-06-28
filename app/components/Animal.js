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
            nome: animal.nome,
            idade: animal.idate,
            porte: animal.porte,
            descricao: animal.descricao,
            raca: animal.raca,
        })
    }

      render() {
        return (
          <View style={styles.container}>
    		<View style={styles.imgLogo}>
                <Image source={logo} style={{flex: 1}}/>
            </View>
    		<View style={styles.formulario}>

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
      }
    })
