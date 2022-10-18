import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
//@ts-ignore
import lual from '../../assets/lual.png'
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Title } from "../../components/funcionais/TitleComponent";
import { MusicComponent } from "../../components/MusicComponent";
import { useNavigation } from "@react-navigation/native";

export const MusicListScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent back>
            <Space>
                <Image style={{ width: 160, height: 160, alignSelf: 'center' }} source={lual} />
                <Text top={1} style={{ color: 'gray' }}>Versões desplugadas para curtir um reggae com os pés na areia!</Text>
                <Row top={1} style={{ alignItems: 'center' }}>
                    <FontAwesome name="spotify" size={32} color='green' />
                    <Title style={{ marginLeft: 8 }}>Spotify</Title>
                </Row>
                <Title top={1} style={{ color: 'gray', fontSize: 16 }}>72.350 curtidas . 4h 44min</Title>
                <Row top={2} style={{ justifyContent: 'space-between' }}>
                    <Row style={{ width: 180, justifyContent: 'space-around' }}>
                        <AntDesign name="hearto" color={'gray'} size={24} />
                        <AntDesign name="download" color={'gray'} size={24} />
                        <MaterialCommunityIcons name="microphone-plus" color={'gray'} size={24} />
                        <SimpleLineIcons name="options-vertical" color={'gray'} size={24} />
                    </Row>
                    <Row style={{ alignItems: 'center' }}>
                        <MaterialCommunityIcons name="repeat" size={28} color={'green'} />
                        <View style={{ marginLeft: 16, alignItems: 'center', backgroundColor: 'green', borderRadius: 222, justifyContent: 'center', width: 40, height: 40 }}>
                            <Entypo name="controller-play" color={'black'} size={24} />
                        </View>
                    </Row>
                </Row>
            </Space>
            <Space>
                <TouchableOpacity onPress={() => {navigation.navigate('MusicScreen')}} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('MusicScreen')}} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('MusicScreen')}} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('MusicScreen')}} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
            </Space>

        </ContainerComponent>
    )
}