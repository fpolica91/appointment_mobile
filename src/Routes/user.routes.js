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
          fontSize: 11,
          marginTop: 5,
        },
        style: {
          height: 80,
          backgroundColor: '#232129',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
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
