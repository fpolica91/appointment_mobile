import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from '../Pages/Signup/index'
import Login from '../Pages/Login/index'
import Main from '../Pages/Main'

const Auth = createStackNavigator()

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    > 
      <Auth.Screen name="maiMainn" component={Main} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Signup" component={Signup} />
    </Auth.Navigator>
  )
}
