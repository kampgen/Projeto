import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './app/Routes'

export default class Projeto extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Projeto', () => Projeto);
