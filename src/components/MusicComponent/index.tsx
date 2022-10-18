import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const MusicComponent = ({photo, title, describe}) => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <Image source={photo} style={{ width: 60, height: 60 }}/>
                <View style={{ marginLeft: 16 }}>
                    <Title>{title}</Title>
                    <Row style={{ alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'gray', color: 'black', padding: 1, fontSize: 12 }}>LYRICS</Text>
                    <Text style={{ marginLeft: 8, color: 'gray' }}>{describe}</Text>
                    </Row>
                </View>
            </Row>
            <SimpleLineIcons name="options-vertical" size={24} color={'gray'}/>
        </Row>
    )
}