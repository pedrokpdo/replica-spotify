import React from 'react'
import { View } from 'react-native'
import { CardComponent } from '../../components/CardComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { HeaderComponent } from '../../components/HeaderComponent'

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
        </ContainerComponent>
    )
}