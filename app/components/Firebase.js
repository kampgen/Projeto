import React, { Component } from 'react'
import { View, text } from 'react-native'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

        let config = {
        apiKey: "AIzaSyAnTjCT-1GYaSl0lueL6d_PpuDwLGOvDfM",
        authDomain: "projeto-301d5.firebaseapp.com",
        databaseURL: "https://projeto-301d5.firebaseio.com",
        projectId: "projeto-301d5",
        storageBucket: "projeto-301d5.appspot.com",
        messagingSenderId: "1047111331002"
        }
        firebase.initializeApp(config);

    export function cadastrarUsuario(user, password) {
        let email = user
        let senha = password
        const usuario = firebase.auth()

        usuario.createUserWithEmailAndPassword(email, senha)
        .catch(erro => alert( erro.message ))
    }

    export function logarUsuario(user, password, goto) {
        let email = user
        let senha = password
        const usuario = firebase.auth()

        usuario.signInWithEmailAndPassword(email, password)
        .catch(erro => alert( erro.message ))
    }
