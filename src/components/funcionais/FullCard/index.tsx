import React from "react";
import { View } from 'react-native'

interface Props {
    style?: any;
    children?: any;
    color?: string;
}

export const FullCard = ({ style = {}, children, color = 'white' }: Props) => {
    return (
        <View style={{ padding: 16, backgroundColor: color, ...style }}>
            {children}
        </View>
    )
}