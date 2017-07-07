import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

import {StackNavigator} from 'react-navigation';

 class AddEvent extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'AddEvent',
 });
   render(){
     const {navigate} = this.props.navigation;
     return(
     <Text>AddEvent</Text>
   )
   }

 }
 module.exports = AddEvent;
