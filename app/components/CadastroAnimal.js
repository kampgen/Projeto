    import React, { Component } from 'react';
    import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Picker,
    } from 'react-native';
    import { defaultColor, secondColor, thirdColor } from '../constants.js'
    import { cadastrarAnimal } from './Firebase.js'
    import { Actions } from 'react-native-router-flux'

    export default class CadastroAnimal extends Component {
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

    _cadastrarAnimal() {
        let erro = false

        if (this.state.nome == "" ||
            this.state.idade == "" ||
            this.state.raca == "") {
            erro = true
        }

        if (erro) return alert("Verifique todas informações.")

        let body = {
            nome: this.state.nome,
            idade: this.state.idade,
            porte: this.state.porte,
            descricao: this.state.descricao,
            raca: this.state.raca,
        }

        cadastrarAnimal(body).then(() => Actions.formLista())
    }

    onChanged(text){
      let newText = '';
      let numbers = '0123456789';

      for (var i=0; i < text.length; i++) {
           if(numbers.indexOf(text[i] > -1 )) {
                newText = newText + text[i];
           }
           else {
                 alert("please enter numbers only");
            }
           this.setState({ idade: newText });
       }
    }

    render() {
    return (
    	<View style={styles.container}>
            <View style={styles.formulario}>
                <View style={styles.box}>
                    <View style={styles.inputText}>
                        <TextInput placeholder='Nome'
                        autoCapitalize="words"
                        onChangeText={nome => this.setState({ nome })}
                        />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={[styles.inputText, {marginRight: 5, paddingTop: 5, paddingLeft: 15}]}>
                        <Picker
                        selectedValue={this.state.porte}
                        onValueChange={porte => this.setState({ porte })}>
                            <Picker.Item label="Muito pequeno" value="pp" />
                            <Picker.Item label="Pequeno" value="p" />
                            <Picker.Item label="Médio" value="m" />
                            <Picker.Item label="Grande" value="g" />
                            <Picker.Item label="Muito Grande" value="gg" />
                        </Picker>
                    </View>
                    <View style={[styles.inputText, {marginLeft: 5}]}>
                        <TextInput placeholder='Idade'
                        keyboardType= 'numeric'
                        maxLength = {2}
                        onChangeText={idade => this.onChanged( idade )}
                        />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inputText}>
                        <TextInput placeholder='Raça'
                        autoCapitalize="words"
                        onChangeText={raca => this.setState({ raca })}
                        />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inputText}>
                        <TextInput placeholder='Descrição'
                        multiline = {true}
                        autoCapitalize="sentences"
                        numberOfLines = {4}
                        onChangeText={descricao => this.setState({ descricao })}
                        />
                    </View>
                </View>

                <View style={styles.button}>
                    <Button color={defaultColor} title='Cadastrar' onPress={() => this._cadastrarAnimal()}></Button>
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
