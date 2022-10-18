import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'
import { LibaryStack } from '../LibaryStack'
import { SearchStack } from '../SearchStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeStack' component={HomeStack} />
            <Screen name='SearchStack' component={SearchStack} />
            <Screen name='LibaryStack' component={LibaryStack} />
        </Navigator>
    )
}