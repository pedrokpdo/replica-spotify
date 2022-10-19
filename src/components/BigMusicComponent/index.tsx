import React from "react";
import { Image, View } from "react-native";
import { FullCard } from "../funcionais/FullCard";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";
//@ts-ignore 
import bita from '../../assets/bita.jpg'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

export const BigMusicComponent = () => {
    return (
        <FullCard style={{ backgroundColor: '#363636', marginTop: 16 }}>
            <Row>
                <Image source={bita} style={{ width: 140, height: 140 }} />
                <View style={{ marginLeft: 16, width: 140 }}>
                    <Text style={{ color: 'gray' }}>Playlist</Text>
                    <Title>Cantando com Mundo Bita</Title>
                    <Text style={{ color: 'gray' }}>Caetano Veloso, Emicida, Nando Reis, Ivete Sangalo, Mundo Bita</Text>
                </View>
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'space-between' }} top={2}>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign style={{ marginRight: 16 }} name="hearto" size={24} color={'gray'} />
                    <SimpleLineIcons name="options-vertical" size={24} color={'gray'} />
                </Row>
                <Row style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'gray', marginRight: 16 }}>72 Musicas</Text>
                    <AntDesign name="play" color={'white'} size={42} />
                </Row>
            </Row>
        </FullCard>
    )
}