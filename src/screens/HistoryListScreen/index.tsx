import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CardComponent } from "../../components/CardComponent";
import { CardMusicComponent } from "../../components/CardMusicComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
//@ts-ignore
import sertanejo from '../../assets/sertanejo.jpg'
//@ts-ignore
import rock from '../../assets/rock.jpg'
//@ts-ignore
import rave from '../../assets/rave.webp'
//@ts-ignore
import lual from '../../assets/lual.png'
import { MusicComponent } from "../../components/MusicComponent";
import { useNavigation } from "@react-navigation/native";


export const HistoryListScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent back>
            <Space>
                <Title bottom={3} top={2}>Tocados recentemente</Title>
            </Space>
            <Divider top={1} bottom={1} />
            <Space>
                <Row>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Podcasts e programas'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Playlists'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Albuns'} />
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <Title style={{ fontSize: 28 }}>Ontem</Title>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={rock} title='Zoio de lula' describe={'Charlie Brown Jr.'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={sertanejo} title='A flor e o beija flor' describe={'Sei la quem'} />
                </TouchableOpacity>
            </Space>
            <Space top={2}>
                <Title style={{ fontSize: 28 }}>Dom, 9 de out de 2022</Title>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={rave} title='Eu Sei (Acustico)' describe={'Rosas de sarom'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('MusicScreen') }} style={{ marginTop: 16 }}>
                    <MusicComponent photo={lual} title='Girasol (Acustico)' describe={'Cidade Negra'} />
                </TouchableOpacity>
            </Space>
        </ContainerComponent>
    )
}