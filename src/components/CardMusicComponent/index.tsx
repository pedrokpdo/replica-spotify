import React from "react";
import { Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const CardMusicComponent = ({ photo, title }) => {
    return (
        <Row style={{ alignItems: 'center', backgroundColor: '#353535', marginTop: 8, borderRadius: 8 }}>
            <Image style={{ width: 60, height: 60 }} source={photo} />
            <Title style={{ marginLeft: 16, width: 80 }}>{title}</Title>
        </Row>
    )
}