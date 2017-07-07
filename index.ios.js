import React, { Component } from 'react';
var ReactNative = require('react-native')
var Login = require('./App/Components/Login')
var Main = require('./App/Components/Main')
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
const trailmix = StackNavigator({
  Login: {screen: Login},
  Main: {screen: Main}
})

AppRegistry.registerComponent('trailmix', () => trailmix);
