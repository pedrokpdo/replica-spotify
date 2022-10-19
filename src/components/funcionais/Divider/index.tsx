import React from 'react'
import { View } from 'react-native'

interface Props {
    bottom?: number;
    top?: number;
}

export const Divider = ({ top = 0, bottom = 0 }: Props) => {
    return (
        <View style={{ height: 1, backgroundColor: 'black', width: '100%', marginTop: 8 * top, marginBottom: 8 * bottom }} />
    )
}