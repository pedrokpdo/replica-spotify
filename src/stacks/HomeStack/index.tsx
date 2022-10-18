import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../../screens/HomeScreen'
import { MusicListScreen } from '../../screens/MusicListScreen'
import { MusicScreen } from '../../screens/MusicScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='MusicListScreen' component={MusicListScreen} />
            <Screen name='MusicScreen' component={MusicScreen} />
        </Navigator>
    )
}