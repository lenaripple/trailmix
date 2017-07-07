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
       <View style={styles.mainContainer}>
         <Text style={styles.header}>Welcome!</Text>
         <Image
            style={{height: '25%',
            width: '50%',
            alignSelf: 'center'}}
            placeholder="fb profile"
            resizeMode="contain"
          />
         <TouchableHighlight
         style={styles.button}
           onPress={() =>
             navigate('AddEvent')
             }
           underlayColor="white">
           <Text style={styles.buttonText}>Add an Outing</Text>
       </TouchableHighlight>
       <TouchableHighlight
        style={styles.button}
          onPress={() =>
            navigate('ViewEvents')
            }
          underlayColor="white">
          <Text style={styles.buttonText}>Browse Existing Outings</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          navigate('PastEvents')
          }
        underlayColor="white">
        <Text style={styles.buttonText}>View Past Outings</Text>
      </TouchableHighlight>
     </View>
     )
   }
 }
 const styles = StyleSheet.create({
   lightGreen: {
     color: '#418964',
   },
   darkGreen: {
     color: '#0F483B'
   },
   medBlue: {
     color: '#319898',
   },
   baseGray: {
     color: '#d8d8d8'
   },
   baseWhite: {
     color: '#ffffea'
   },
   orange: {
     color: '#FDC250'
   },
   yellow:{
     color:'#F6DE53'
   },
   header: {
     fontSize: 25,
     textAlign: 'center',
     margin: 20,
   },
   text: {
     textAlign: 'center',
     color: '#333',
     marginBottom: 5,
   },
   container: {
     justifyContent: 'center',
     padding: 20,
     textAlign: 'center',
     color:'#334d4d',
     fontSize: 18
   },
   mainContainer: {
     flex: 1,
     padding: 20,
     flexDirection: 'column',
     backgroundColor: '#418964'
   },
   title: {
     fontSize: 35,
     textAlign: 'center',
     color: '#ffed66',
     fontWeight: 'bold'
   },
   buttonText: {
     fontSize: 18,
     color: '#ff5e5b',
     alignSelf: 'center',
     fontWeight: 'bold'
   },
   button: {
     height: 40,
     flexDirection: 'row',
     backgroundColor: 'white',
     borderColor: 'white',
     marginBottom: 5,
     marginTop: 20,
     padding: 20,
     alignSelf: 'center',
     justifyContent: 'center'
   }
 })
 module.exports = Main;
