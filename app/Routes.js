import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Lista from './components/Lista'
import Start from './components/Start'

export default props => (
  <Router>
  <Scene key="formStart" component={Start} title="Start" />
    <Scene key="formCadastro" component={Cadastro} title="Cadastro" />
    <Scene key="formLogin" component={Login} title="Login" />
    <Scene key="formLista" component={Lista} title="Lista" />
  </Router>
)
