import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../../screens/HomeScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator>
            <Screen name='HomeScreen' component={HomeScreen}/>
        </Navigator>
    )
}