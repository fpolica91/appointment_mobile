import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../Pages/Main'

const User = createBottomTabNavigator()

export default function UserRoutes() {
  return (
    <User.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          color: '#FFF',
        },
        style: {
          backgroundColor: '#232129',
        },
      }}
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabStyle: { backgroundColor: '#312e38' },
      }}
    >
      <User.Screen name="Main" component={Main} />
    </User.Navigator>
  )
}
