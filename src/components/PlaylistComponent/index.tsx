import React from "react";
import { Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";


export const PlaylistComponent = ({ photo, name, follow }) => {
    return (
        <Row top={2}>
            <Image style={{ width: 60, height: 60 }} source={photo} />
            <View style={{ marginLeft: 16 }}>
                <Title>{name}</Title>
                <Text top={1} style={{ color: 'gray' }}>{follow} {follow === 0 ? 'seguidor' : 'seguidores'}</Text>
            </View>
        </Row>
    )
}