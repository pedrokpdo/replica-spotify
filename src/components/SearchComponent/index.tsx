import React from "react";
import { Dimensions, View } from "react-native";
import { FullCard } from "../funcionais/FullCard";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    color?: string;
    title?: string;
}

const { width } = Dimensions.get('window')

export const SearchComponent = ({ color, title }: Props) => {
    return (
        <FullCard style={{ backgroundColor: color, width: width / 2 - 24, height: 100, padding: 8, borderRadius: 8, marginTop: 16 }}>
            <Title style={{ width: 90 }}>{title}</Title>
        </FullCard>
    )
}