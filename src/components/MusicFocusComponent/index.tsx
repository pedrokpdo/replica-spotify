import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";
//@ts-ignore
import lual from '../../assets/lual.png'
import { Text } from "../funcionais/TextComponent";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get('window')

export const MusicFocusComponent = () => {
    return (
        <View style={{ position: 'absolute', height: height - 73, justifyContent: 'flex-end', width: width - 16, marginHorizontal: 8 }}>
            <Row style={{ backgroundColor: '#817a38', height: 60, padding: 8, alignItems: 'center', borderRadius: 4, justifyContent: 'space-between' }}>
                <Row>
                    <Image source={lual} style={{ width: 50, height: 50, borderRadius: 4 }} />
                    <View style={{ marginLeft: 16 }}>
                        <Title>Zoio de lula</Title>
                        <Text style={{ color: '#dadada' }}>Luau MTV</Text>
                    </View>
                </Row>
                <Row style={{ justifyContent: 'space-around', width: 111 }}>
                    <Feather name="music" size={24} color='white' />
                    <AntDesign name="hearto" size={24} color='white' />
                    <Ionicons name="play" size={24} color='white' />
                </Row>
            </Row>
        </View>
    )
}