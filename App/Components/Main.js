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

 class Main extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'Main',
 });
   render(){
     const { navigate } = this.props.navigation;
     return(
       <View style={styles.container}>
         <Text style={styles.header}>Welcome!</Text>
         <TouchableHighlight
         style={styles.buttons}
           onPress={() =>
             navigate('AddEvent')
             }
           underlayColor="white">
           <Text>Add an Outing</Text>
       </TouchableHighlight>
       <TouchableHighlight
        style={styles.buttons}
          onPress={() =>
            navigate('ViewEvents')
            }
          underlayColor="white">
          <Text>Browse Existing Outings</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() =>
          navigate('PastEvents')
          }
        underlayColor="white">
        <Text>View Past Outings</Text>
      </TouchableHighlight>
     </View>
     )
   }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFF',
   },
   content: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   avatar: {
     margin: 20,
   },
   avatarImage: {
     borderRadius: 50,
     height: 100,
     width: 100,
   },
   header: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   text: {
     textAlign: 'center',
     color: '#333',
     marginBottom: 5,
   },
   buttons: {
     justifyContent: 'space-between',
     flexDirection: 'row',
     margin: 20,
     marginBottom: 30,
   },
 })
 module.exports = Main;
