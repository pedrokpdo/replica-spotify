import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LibaryScreen } from '../../screens/LibaryScreen'


const { Navigator, Screen } = createNativeStackNavigator()

export const LibaryStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='LibaryScreen' component={LibaryScreen} />
        </Navigator>
    )
}