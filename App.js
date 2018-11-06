import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation';
import Profile from './components/Profile';
import Homes from './components/Homes';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

const HomeTab = createMaterialTopTabNavigator({
  Homes: Homes,
  Profile: Profile
})


const Stack = createStackNavigator({
  Home: HomeTab
});



export default class App extends Component{
  render() {
    return (     
        <View style={styles.container}>
          <Stack />
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
