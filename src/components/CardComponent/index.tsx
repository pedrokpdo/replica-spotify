import React from "react";
import { TouchableOpacity } from "react-native";
import { FullCard } from "../funcionais/FullCard";
import { Text } from "../funcionais/TextComponent";

interface Props {
    title?: string;
    focus?: string;
    setFocus?: any;
}

export const CardComponent = ({ title, focus, setFocus }: Props) => {
    return (
        <TouchableOpacity onPress={() => {setFocus(title)}}>
            <FullCard style={{ backgroundColor: focus === title ? 'green' : '#353535', borderRadius: 32, paddingHorizontal: 16, paddingVertical: 10 }}>
                <Text>{title}</Text>
            </FullCard>
        </TouchableOpacity>
    )
}