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

 class PastEvents extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'PastEvents',
 });
   render(){
     const {navigate} = this.props.navigation;
     return(
     <Text>PastEvents</Text>
   )
   }

 }
 module.exports = PastEvents;
