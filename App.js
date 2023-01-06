import { DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigations/drawer';

export default class App extends React.Component{
  render(){return (
    <NavigationContainer>

<DrawerNavigator/>
    </NavigationContainer>
     
      
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
