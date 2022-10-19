import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SearchScreen } from '../../screens/SearchScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const SearchStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='SearchScreen' component={SearchScreen} />
        </Navigator>
    )
}