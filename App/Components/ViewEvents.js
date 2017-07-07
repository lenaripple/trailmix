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

 class ViewEvents extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'ViewEvents',
 });
   render(){
     const {navigate} = this.props.navigation;
     return(
     <Text>ViewEvents</Text>
   )
   }

 }
 module.exports = ViewEvents;
