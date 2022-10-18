import React from "react";
import { View } from "react-native";

export const Row = ({children, style={}, top=0, bottom=0}) => {
    return (
        <View style={{ marginTop: 8 * top, marginBottom: 8 * bottom, flexDirection: 'row', ...style }}>
            {children}
        </View>
    )
}