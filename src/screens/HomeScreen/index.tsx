import React from 'react'
import { View } from 'react-native'
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
        </ContainerComponent>
    )
}