import React from "react";
import { Text as NativeText } from "react-native";

interface Props {
    children?: any;
    style?: any;
    bottom?: any;
    top?: any;

}

export const Text = ({ children, style = {}, top = 0, bottom = 0 }: Props) => {
    return (
        <NativeText style={{ color: 'white', marginTop: 8 * top, marginBottom: 8 * bottom, fontSize: 14, ...style }}>{children}</NativeText>
    )
}