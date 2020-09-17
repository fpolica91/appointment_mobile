import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/Routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}


