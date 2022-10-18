import React from 'react'
import { Image, View } from 'react-native'
import { CardComponent } from '../../components/CardComponent'
import { CardMusicComponent } from '../../components/CardMusicComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { HeaderComponent } from '../../components/HeaderComponent'
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
import { Title } from '../../components/funcionais/TitleComponent'
import { SimpleLineIcons } from '@expo/vector-icons'
import { FullCard } from '../../components/funcionais/FullCard'
import { Text } from '../../components/funcionais/TextComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <HeaderComponent />
            </Space >
            <Space top={3}>
                <Row>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Música'} />
                    </View>
                    <CardComponent title={'Podcasts e programas'} />
                </Row>
            </Space>
            <Space top={2}>
                <Row style={{ flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <View>
                        <CardMusicComponent title={'Para festa'} photo={party} />
                    </View>
                    <View>
                        <CardMusicComponent title={'Rave'} photo={rave} />
                    </View>
                    <View>
                        <CardMusicComponent title={'Rock'} photo={rock} />
                    </View>
                    <View>
                        <CardMusicComponent title={'Luau'} photo={lual} />
                    </View>
                    <View>
                        <CardMusicComponent title={'Pagode'} photo={pagode} />
                    </View>
                    <View>
                        <CardMusicComponent title={'Sertanejo'} photo={sertanejo} />
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title style={{ fontSize: 24 }}>Escolhido para você</Title>
                    <SimpleLineIcons name='options-vertical' size={24} color={'white'} />
                </Row>
                <FullCard style={{ padding: 8, backgroundColor: '#353535', borderRadius: 8, marginTop: 16 }}>
                    <Row style={{ alignItems: 'center' }}>
                        <Image source={rave} style={{ width: 100, height: 100 }} />
                        <View style={{ width: 180, marginLeft: 16 }}>
                            <Text>Episodeo . Thu</Text>
                            <Title>Modus Operandi</Title>
                            <Text>Episodio especial de duas horas sobre Jeffrey Dahmer</Text>
                        </View>
                    </Row>

                </FullCard>
            </Space>
        </ContainerComponent>
    )
}