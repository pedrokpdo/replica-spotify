import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HistoryListScreen } from '../../screens/HistoryListScreen'
import { HomeScreen } from '../../screens/HomeScreen'
import { MusicListScreen } from '../../screens/MusicListScreen'
import { MusicScreen } from '../../screens/MusicScreen'
import { NotificationListScreen } from '../../screens/NotificationListScreen'
import { ProfileScreen } from '../../screens/ProfileScreen'
import { SettingsScreen } from '../../screens/SettingsScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='MusicListScreen' component={MusicListScreen} />
            <Screen name='MusicScreen' component={MusicScreen} />
            <Screen name='NotificationListScreen' component={NotificationListScreen} />
            <Screen name='HistoryListScreen' component={HistoryListScreen} />
            <Screen name='ProfileScreen' component={ProfileScreen} />
            <Screen name='SettingsScreen' component={SettingsScreen} />
        </Navigator>
    )
}