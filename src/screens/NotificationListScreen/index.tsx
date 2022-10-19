import React from "react";
import { View } from "react-native";
import { CardComponent } from "../../components/CardComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { NotificationComponent } from "../../components/NotificationComponent";

export const NotificationListScreen = () => {
    return (
        <ContainerComponent back>
            <Space>
                <Title top={2} style={{ fontSize: 32 }}>Novidades</Title>
                <Text bottom={2} top={.2} style={{ color: 'gray' }}>Os ultimos lançamentos dos artistas, poscasts...</Text>
            </Space>
            <Divider top={1} bottom={1} />
            <Space>
                <Row>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Musicas'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Podcasts e programas'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Merch e Eventos'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <CardComponent title={'Programas'} />
                    </View>
                </Row>
            </Space>
            <Space>
                <Title>Novos</Title>
            </Space>
            <View style={{ marginTop: 16 }}>
                <NotificationComponent />
                <NotificationComponent />
                <NotificationComponent />
            </View>
        </ContainerComponent>
    )
}