import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const FixComponent = ({ Icon, iconName, title, backgroundColor, colorIcon }) => {
    return (
        <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor, padding: 12, }}>
                    <Icon name={iconName} color={colorIcon} size={32} />
                </View>
                <View style={{ marginLeft: 16 }}>
                    <Title>{title}</Title>
                    <Text top={.2} style={{ color: '#666666' }}>Playlist . 70 músicas</Text>
                </View>
            </Row>
            <AntDesign name="pushpino" size={24} color='green' />
        </Row>
    )
}