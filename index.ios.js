import React, { Component } from 'react';
var ReactNative = require('react-native')
var Login = require('./App/Components/Login')
var Main = require('./App/Components/Main')
var AddEvent = require('./App/Components/AddEvent')
var PastEvents = require('./App/Components/PastEvents')
var ViewEvents = require('./App/Components/ViewEvents')

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

const trailmix = StackNavigator({
  Login: {screen: Login},
  Main: {screen: Main},
  AddEvent: {screen: AddEvent},
  PastEvents: {screen: PastEvents},
  ViewEvents: {screen: ViewEvents}
})

AppRegistry.registerComponent('trailmix', () => trailmix);
