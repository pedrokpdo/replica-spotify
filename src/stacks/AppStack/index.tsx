import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeStack' component={HomeStack}/>
        </Navigator>
    )
}