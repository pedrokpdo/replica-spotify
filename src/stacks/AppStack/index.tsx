import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'
import { LibaryStack } from '../LibaryStack'
import { SearchStack } from '../SearchStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'black' }, headerShown: false }} >
            <Screen name='HomeStack' component={HomeStack} options={{ tabBarIcon: () => (<Ionicons name='home' size={24} color='white' />) , tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'white'}} />
            <Screen name='SearchStack' component={SearchStack} options={{ tabBarIcon: () => (<Ionicons name='search' size={24} color='white' />) , tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'white'}} />
            <Screen name='LibaryStack' component={LibaryStack} options={{ tabBarIcon: () => (<Ionicons name='library' size={24} color='white' />) , tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'white'}} />
        </Navigator>
    )
}