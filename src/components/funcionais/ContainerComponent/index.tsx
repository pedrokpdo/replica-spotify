import React from "react";
import { ScrollView, View } from 'react-native'

export const ContainerComponent = ({ children }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgb(19, 18, 18)' }}>
            {children}
        </ScrollView>
    )
}