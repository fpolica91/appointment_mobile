import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../Pages/Main'
import Profile from '../Pages/Profile'
import Appointments from '../Pages/Appointments/index'

const User = createBottomTabNavigator()

export default function UserRoutes() {
  return (
    <User.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#232129',
        },
      }}
      initialRouteName="Main"
    >
      <User.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Main"
        component={Main}
      />

      <User.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />

      <User.Screen
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
        name="Appointments"
        component={Appointments}
      />
    </User.Navigator>
  )
}
