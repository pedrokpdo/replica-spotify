import React from 'react'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { HeaderComponent } from '../../components/HeaderComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <HeaderComponent />
            </Space >
        </ContainerComponent>
    )
}