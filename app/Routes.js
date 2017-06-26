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
    import CadastroAnimal from './components/CadastroAnimal'
    import Animal from './components/Animal'

    export default props => (
        <Router>
            <Scene key="formStart" initial hideNavBar component={Start} title="Adoção" />
            <Scene key="animal" direction="vertical" component={Animal} title="Animal" />
            <Scene key="formCadastro" component={Cadastro} title="Cadastro de usuário" />
            <Scene key="formLogin" component={Login} title="Login" />
            <Scene key="formLista" component={Lista} title="Lista" />
            <Scene key="formCadastroAnimal" component={CadastroAnimal} title="Cadastro de Animal" />
        </Router>
    )
