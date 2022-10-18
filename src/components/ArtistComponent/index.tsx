import React from "react";
import { Image, View } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const ArtistComponent = ({photo, title}) => {
    return (
        <View>
            <Image source={photo} style={{ width: 140, height: 140 }}/>
            <Text top={1} style={{ width: 140 }}>{title}</Text>
        </View>
    )
}