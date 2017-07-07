import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

 class Main extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'Main',
 });
   render(){
    //  const {navigate} =
    //  this.props.navigation;
     return(
     <Text>Main</Text>
   )
   }

 }
 module.exports = Main;
