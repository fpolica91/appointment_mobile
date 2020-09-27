import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StatusBar, Clipboard } from 'react-native'
import Routes from './src/Routes/index'
import { AppLoading } from 'expo'
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo'
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

if (__DEV__) {
  Clipboard.setString('')
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </NavigationContainer>
    )
  }
}
