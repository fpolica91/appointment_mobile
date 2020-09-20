import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Barber = createStackNavigator()

export default function BarberRoutes() {
    return (
        <Barber.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#312e38' }
            }}
        >
        </Barber.Navigator>
    )
}