import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './app/components/Login.js'
import Cadastro from './app/components/Cadastro.js'


export default class Projeto extends Component {
  render() {
    return (
      <Cadastro />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Projeto', () => Projeto);
