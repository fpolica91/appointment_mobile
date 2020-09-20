import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const User = createStackNavigator()

export default function UserRoutes() {
    return (
        <User.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#312e38' }
            }}
        >
        </User.Navigator>
    )
}