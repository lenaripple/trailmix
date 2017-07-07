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

class Login extends Component {
  static navigationOptions = {
    title: 'Login Page',
  };
  // state = {
  //   user: undefined, // user has not logged in yet
  // };
  //
  // // Set up Linking
  // componentDidMount() {
  //   // Add event listener to handle OAuthLogin:// URLs
  //   Linking.addEventListener('url', this.handleOpenURL);
  //   // Launched from an external URL
  //   Linking.getInitialURL().then((url) => {
  //     if (url) {
  //       this.handleOpenURL({ url });
  //     }
  //   });
  // };
  //
  // componentWillUnmount() {
  //   // Remove event listener
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // };
  //
  // handleOpenURL = ({ url }) => {
  //   // Extract stringified user string out of the URL
  //   const [, user_string] = url.match(/user=([^#]+)/);
  //   this.setState({
  //     // Decode the user string and parse it into JSON
  //     user: JSON.parse(decodeURI(user_string))
  //   });
  //   if (Platform.OS === 'ios') {
  //     SafariView.dismiss();
  //   }
  // };
  //
  // // Handle Login with Facebook button tap
  // loginWithFacebook = () =>
  //   this.openURL('http://localhost:3000/auth/facebook');
  //
  // openURL = (url) => {
  //   console.log(url);
  //   console.log(SafariView);
  //   // Use SafariView on iOS
  //   if (Platform.OS === 'ios') {
  //     SafariView.show({
  //       url: url,
  //       fromBottom: true,
  //     });
  //   }
  //   // Or Linking.openURL on Android
  //   else {
  //     Linking.openURL(url);
  //   }
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>trailMix</Text>
        <Text style={styles.text}>Find friends for every adventure</Text>
        <TouchableHighlight
        style={styles.button}
          onPress={() =>
            navigate('Main')
            }
          underlayColor="white">
          <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
    </View>
      // <View style={styles.container}>
      //   { user
      //     ? // Show user info if already logged in
      //       <View style={styles.content}>
      //         <Text style={styles.header}>
      //           Welcome {user.name}!
      //         </Text>
      //         <View style={styles.avatar}>
      //           <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
      //         </View>
      //       </View>
      //     : // Show Please log in message if not
      //       <View style={styles.content}>
      //         <Text style={styles.header}>
      //           Welcome to trailMix!
      //         </Text>
      //         <Text style={styles.text}>
      //           Please log in to continue
      //         </Text>
      //       </View>
      //   }
      //   <View style={styles.buttons}>
      //     <Button
      //       name="facebook"
      //       backgroundColor="#3b5998"
      //       onPress={this.loginWithFacebook}
      //       title="Login with Facebook"
      //     />
      //   </View>
      // </View>
    );
  }
}

// const iconStyles = {
//   borderRadius: 10,
//   iconStyle: { paddingVertical: 5 },
// };

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

module.exports = Login;
