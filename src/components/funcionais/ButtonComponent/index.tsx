import React from "react";
import { TouchableOpacity } from "react-native";
import { Row } from "../RowComponent";
import { Title } from "../TitleComponent";

interface Props {
    title?: string;
    onPress?: () => void;
    color?: string;
    backgroundColor?: string;
    top?: number;
    bottom?: number;
}

export const Button = ({ title, onPress, color = 'black', backgroundColor = 'white', top, bottom }: Props) => {
    return (
        <Row top={top} bottom={bottom}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: backgroundColor, paddingVertical: 6, paddingHorizontal: 32, borderRadius: 16 }}>
                <Title style={{ color: color }}>{title}</Title>
            </TouchableOpacity>
        </Row>
    )
}