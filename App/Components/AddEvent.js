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

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
  } from 'react-native-form-generator';

 class AddEvent extends Component {
   static navigationOptions = ({navigation})=> ({
     title: 'AddEvent',
 });
   render(){
     const {navigate} = this.props.navigation;
     return(
       <View style={styles.mainContainer}>
        <Form ref='newEventForm' label='New Event'>
          <InputField style={styles.smText}
            ref="title"
            label="Trip Title"
            placeholder=""
          />
          <InputField style={styles.smText}
            ref="date"
            label="Date"
            placeholder=""
          />
          <InputField style={styles.smText}
            ref="genLocation"
            label="Vague Location"
            placeholder="Visible to everyone."
          />
          <InputField style={styles.smText}
            ref="specLocation"
            label="Specific Location"
            placeholder="Only visible to approved members."
          />
          <InputField style={styles.smText}
            ref="activity"
            label="Activity"
            placeholder="What are you going to do?"
          />
          <InputField style={styles.smText}
            ref="description"
            label="Public Description"
            placeholder="Visible to everyone."
          />
          <InputField style={styles.smText}
            ref="extra"
            label="Extras"
            placeholder="Anything else? Only visible to approved members."
          />
        </Form>
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
   },
   smText: {
     fontSize: 10
   }
 })
 module.exports = AddEvent;
