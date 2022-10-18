import React from "react";
import { View } from "react-native";

export const Space = ({children, top=0, style={}, bottom=0}) => {
    return (
        <View style={{ marginHorizontal: 16, marginTop: 8 * top, marginBottom: 8 * bottom ,...style }}>
            {children}
        </View>
    )
}