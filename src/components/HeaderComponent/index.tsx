import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { AvatarComponent } from '../AvatarComponent'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'

export const HeaderComponent = () => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <AvatarComponent />
                <Title style={{ marginLeft: 8 }}>Boa Tarde</Title>
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'space-around', width: 100 }}>
                <Ionicons name='notifications-outline' size={24} color={'white'} />
                <FontAwesome5 name='history' size={24} color={'white'} />
            </Row>
        </Row>
    )
}