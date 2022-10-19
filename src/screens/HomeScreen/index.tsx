import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
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
import { AntDesign, Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { FullCard } from '../../components/funcionais/FullCard'
import { Text } from '../../components/funcionais/TextComponent'
import { ArtistComponent } from '../../components/ArtistComponent'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
    const [focus, setFocus] = useState<any>('none')
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            {focus === 'none' ? (
                <>
                    <Space top={2}>
                        <HeaderComponent />
                    </Space >
                    <Space top={3}>
                        <Row>
                            <View style={{ marginRight: 16 }}>
                                <CardComponent title={'Música'} focus={focus} setFocus={setFocus} />
                            </View>
                            <View style={{ marginRight: 16 }}>
                                <CardComponent title={'Poscasts e programas'} focus={focus} setFocus={setFocus} />
                            </View>
                        </Row>
                    </Space>
                    <Space top={2}>
                        <Row style={{ flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('MusicListScreen') }}>
                                <CardMusicComponent title={'Para festa'} photo={party} />
                            </TouchableOpacity>
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
                    <Space top={2}>
                        <Title style={{ fontSize: 24 }}>Seus mixes mais ouvidos</Title>
                        <Row top={2}>
                            <View style={{ marginRight: 16 }}>
                                <ArtistComponent photo={sertanejo} title='Marina Peralta, Ponto de equilibrio Mar...' />
                            </View>
                            <View style={{ marginRight: 16 }}>
                                <ArtistComponent photo={rock} title='Marina Peralta, Ponto de equilibrio Mar...' />
                            </View>
                            <View style={{ marginRight: 16 }}>
                                <ArtistComponent photo={rave} title='Marina Peralta, Ponto de equilibrio Mar...' />
                            </View>
                            <View style={{ marginRight: 16 }}>
                                <ArtistComponent photo={sertanejo} title='Marina Peralta, Ponto de equilibrio Mar...' />
                            </View>
                        </Row>
                    </Space>
                    <View style={{ height: 100 }}></View>
                </>

            ) : (
                <>
                    <Space top={2}>
                        <HeaderComponent />
                    </Space >
                    <Space top={3}>
                        <Row style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {setFocus('none')}} style={{ marginRight: 16 }}>
                                <Entypo name='cross' size={24} color={'white'}/>
                            </TouchableOpacity>
                            <View style={{ marginRight: 16 }}>
                                <CardComponent focus={focus} setFocus={setFocus} title={focus} />
                            </View>
                        </Row>
                    </Space>
                </>
            )}
        </ContainerComponent>
    )
}