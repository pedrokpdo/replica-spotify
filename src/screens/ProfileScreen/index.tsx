import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AvatarComponent } from "../../components/AvatarComponent";
import { CardComponent } from "../../components/CardComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
//@ts-ignore
import party from '../../assets/party.jpg'
//@ts-ignore
import sertanejo from '../../assets/sertanejo.jpg'
import { PlaylistComponent } from "../../components/PlaylistComponent";

export const ProfileScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <Space top={2}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Ionicons name="arrow-back" size={24} color={'white'} />
                    <Row>
                        <TouchableOpacity onPress={() => { navigation.navigate('SettingsScreen') }}>
                            <Ionicons style={{ marginRight: 16 }} name='settings' size={24} color='white' />
                        </TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={24} color="white" />
                    </Row>
                </Row>
            </Space>
            <Space top={4}>
                <AvatarComponent big />
                <Title top={1} style={{ alignSelf: 'center', fontSize: 28 }}>Pedromotoehm</Title>
            </Space>
            <Space>
                <Row top={2} style={{ alignSelf: 'center' }}>
                    <CardComponent title="Editar perfil" />
                </Row>
            </Space>
            <Space top={3}>
                <Row style={{ justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'gray' }}>0</Text>
                        <Text style={{ color: 'gray' }}>Seguidores</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'gray' }}>0</Text>
                        <Text style={{ color: 'gray' }}>Seguidores</Text>
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <Title>Playlists</Title>
                <PlaylistComponent name={'Midia'} follow={0} photo={sertanejo} />
                <PlaylistComponent name={'Melhores'} follow={10} photo={party} />
            </Space>
        </ContainerComponent>
    )
}