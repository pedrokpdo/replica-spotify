import React from "react";
import { FullCard } from "../funcionais/FullCard";
import { Text } from "../funcionais/TextComponent";

export const CardComponent = ({ title }) => {
    return (
        <FullCard style={{ backgroundColor: '#353535', borderRadius: 32, paddingHorizontal: 16, paddingVertical: 10 }}>
            <Text>{title}</Text>
        </FullCard>
    )
}