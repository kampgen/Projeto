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
    const passwordImg = require('../images/password.png')

    export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    Logar( user, password ) {
        logarUsuario(user, password)
        .then(p => {
            if (p == undefined) return
            Actions.formLista()
        })
    }

      render() {
        return (
          <View style={styles.container}>
			  <View style={styles.box}>
				  <View style={styles.boxImg}>
					  <Image source={userImg} style={styles.userIcon}/>
				  </View>
				  <View style={styles.inputText}>
					  <TextInput placeholder='Login'
                      type=" e"
                       onChangeText={e => this.setState({ email: e })} />
				  </View>
			  </View>
			  <View style={styles.box}>
				  <View style={styles.boxImg}>
					  <Image source={passwordImg} style={styles.passwordIcon} />
				  </View>
				  <View style={styles.inputText}>
					  <TextInput placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={e => this.setState({ password: e })} />
				  </View>
			  </View>
                <View style={{marginHorizontal: 50, alignSelf: 'stretch', backgroundColor: 'blue', marginTop: 10}}>
                    <Button
                    title="logar"
                    color={defaultColor}
                    onPress={() => this.Logar(this.state.email, this.state.password)} />
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
        marginTop: 10,
        backgroundColor: 'blue'
      },
    })
