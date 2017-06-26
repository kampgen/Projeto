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
            nome: this.props.nome,
            idade: this.props.idate,
            porte: this.props.porte,
            descricao: this.props.descricao,
            raca: this.props.raca,
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
    	marginLeft: 30,
        borderRightWidth: 0
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
