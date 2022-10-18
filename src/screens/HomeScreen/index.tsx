import React from 'react'
import { View } from 'react-native'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Title } from '../../components/funcionais/TitleComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Title>Ola mundo</Title>
        </ContainerComponent>
    )
}