import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { CardComponent } from "../../components/CardComponent";
import { Button } from "../../components/funcionais/ButtonComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MainHeader } from "../../components/MainHeader";

export const LibaryScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeader title="Biblioteca">
                    <Row style={{ justifyContent: 'space-around', width: 120 }}>
                        <AntDesign name="search1" size={24} color='white' />
                        <AntDesign name="search1" size={24} color='white' />
                        <AntDesign name="search1" size={24} color='white' />
                    </Row>
                </MainHeader>
                <Row top={2} style={{}}>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'PlayLists'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'PlayLists'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'PlayLists'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'PlayLists'} />
                    </View>
                </Row>
            </Space>
            <Divider top={3} bottom={2} />
            <Space>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <AntDesign name="arrowsalt" size={24} color={'white'} />
                        <Text style={{ marginLeft: 16 }}>Mais recente</Text>
                    </Row>
                    <MaterialCommunityIcons name="quadcopter" size={24} color='white' />
                </Row>
            </Space>
            <Space top={2}>
                <FullCard style={{ backgroundColor: '#313030', borderRadius: 4 }}>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Row style={{ alignItems: 'center' }}>
                            <MaterialCommunityIcons name="spotify" color={'green'} size={24} />
                            <Text>Dicas</Text>
                        </Row>
                        <Entypo name="cross" size={24} color='white' />
                    </Row>
                    <Title top={2}>Siga seus podcasts favoritos</Title>
                    <Text top={1} style={{ color: '#dadada' }}>Quando você segue um programa, é mais fácil encontrar os episódios mais recentes</Text>
                    <Button top={3} title="Navegar pelos podcasts" />
                </FullCard>
            </Space>
        </ContainerComponent>
    )
}