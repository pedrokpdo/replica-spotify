import React from "react";
import { Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import leao from '../../assets/leao.jpg'
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Divider } from "../funcionais/Divider";
import { Space } from "../funcionais/SpaceComponent";

export const NotificationComponent = () => {
    return (
        <>
            <Space>
                <Row>
                    <Image source={leao} style={{ width: 100, height: 100, borderRadius: 8 }} />
                    <View style={{ width: 200, marginLeft: 16 }}>
                        <Text style={{ color: 'gray' }}>10h atrás</Text>
                        <Title top={.2} bottom={.2}>Quarta-feira, 19 de Outubro, 2022</Title>
                        <Text style={{ color: 'gray' }}>Leão hoje</Text>
                    </View>
                </Row>
                <Text style={{ color: 'gray' }}>Episódio . 2min</Text>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }} top={2}>
                    <Row style={{ width: 120, justifyContent: 'space-around', alignItems: 'center' }}>
                        <Ionicons name="add" size={24} color='gray' />
                        <Ionicons name="download" size={24} color='gray' />
                        <SimpleLineIcons name="options-vertical" size={24} color='gray' />
                    </Row>
                    <View>
                        <AntDesign name="play" size={32} color='white' />
                    </View>
                </Row>
            </Space>
            <Divider top={2} bottom={2}/>
        </>
    )
}