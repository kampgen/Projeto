import React, { Component } from 'react'
import { View, text } from 'react-native'
import firebase from 'firebase'

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

        return usuario.createUserWithEmailAndPassword(email, senha)
        .then(p => p)
        .catch(erro => alert( erro.message ))
    }

    export function logarUsuario(user, password) {
        let email = user
        let senha = password
        const usuario = firebase.auth()

        return usuario.signInWithEmailAndPassword(email, password).
        then(p => p)
        .catch(erro => alert( erro.message ))
    }

    export function fetchAll() {
        let db = firebase.database()
        return db.ref("/Animais").once("value").then(snapshot => snapshot.val())
    }

    export function authTest() {
        let db = firebase.auth()

        //criar funçao para verificar se usuario esta logado
    }

    export function cadastrarAnimal(animal) {
        animal.foto = "http://www.folhavitoria.com.br/geral/blogs/petblog/wp-content/uploads/2013/02/Imagem%202561361208510.jpg"

        firebase.database().ref('Animais').push({
            Nome: animal.nome,
            Idade: animal.idade,
            Porte: animal.porte,
            Raca: animal.raca,
            Descricao: animal.descricao,
            Foto: animal.foto
        });
    }
