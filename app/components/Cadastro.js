    import React, { Component } from 'react';
    import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    Button
    } from 'react-native';
    import { defaultColor, secondColor, thirdColor } from '../constants.js'
    import { cadastrarUsuario } from './Firebase.js'
    const userImg = require('../images/user.png')
    const passwordImg = require('../images/password.png')
    import { Actions } from 'react-native-router-flux'

    export default class Login extends Component {
    constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    }

    emailValidate() {
        if(this.state.email.length == 0) return null
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let isEmail = emailRegex.test(this.state.email)
        if(!isEmail) return 'error'
        return 'success'
    }

    cadastrar(email, senha) {

        let validate = this.emailValidate()

        if (validate != 'success') { return alert("Email", "Email inválido.") }

        cadastrarUsuario(email, senha)
        .then(l => {
            if (l == undefined) return
            Actions.formLista()
        })
    }

    render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.formulario}>
    			<View style={styles.box}>
    				<View style={styles.inputText}>
    					<TextInput placeholder='email'
                        onChangeText={email => this.setState({ email })}
                        />
    				</View>
    			</View>

                <View style={styles.box}>
                  <View style={styles.inputText}>
                    <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    />
                  </View>
                </View>

    			<View style={styles.button}>
    				<Button color={defaultColor} title='Cadastrar' onPress={() => this.cadastrar(this.state.email,this.state.password)}></Button>
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
