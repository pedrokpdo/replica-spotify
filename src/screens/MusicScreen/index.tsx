import { AntDesign, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
//@ts-ignore
import party from '../../assets/party.jpg'
//@ts-ignore
import sertanejo from '../../assets/sertanejo.jpg'
//@ts-ignore
import rock from '../../assets/rock.jpg'
//@ts-ignore
import rave from '../../assets/rave.webp'
//@ts-ignore
import pagode from '../../assets/pagode.webp'
//@ts-ignore
import lual from '../../assets/lual.png'
import { Title } from "../../components/funcionais/TitleComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { PlayComponent } from "../../components/PlayComponent";

export const MusicScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <AntDesign name="down" color={'white'} size={24} />
                    <MaterialIcons name="connected-tv" color={'white'} size={24} />
                </Row>
            </Space>
            <Space top={3}>
                <Image source={lual} style={{ width: 180, height: 180, alignSelf: 'center' }} />
                <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title style={{ fontSize: 24 }}>Girasol (Acustico)</Title>
                    <SimpleLineIcons name="options-vertical" size={24} color={'white'} />
                </Row>
                <Text style={{ color: 'gray' }}>Cidade Negra</Text>
                <AntDesign style={{ alignSelf: 'flex-end' }} name="sharealt" color={'white'} size={24} />
            </Space>
            <Space top={3}>
                <PlayComponent />
                <Row top={10}>
                    <View style={{ height: 2, backgroundColor: 'white', flex: 1 }} />
                    <View style={{ height: 2, backgroundColor: 'gray', flex: 1 }} />
                </Row>
                <Row top={1} style={{ justifyContent: 'space-between' }}>
                    <Text>1:01</Text>
                    <Text>2:02</Text>
                </Row>
            </Space>
        </ContainerComponent>
    )
}