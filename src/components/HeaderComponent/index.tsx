import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AvatarComponent } from '../AvatarComponent'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'

export const HeaderComponent = () => {
    const navigation = useNavigation<any>()
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <AvatarComponent />
                <Title style={{ marginLeft: 8 }}>Boa Tarde</Title>
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'space-around', width: 100 }}>
                <TouchableOpacity onPress={() => {navigation.navigate('NotificationListScreen')}}>
                    <Ionicons name='notifications-outline' size={24} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('HistoryListScreen')}}>
                    <FontAwesome5 name='history' size={24} color={'white'} />
                </TouchableOpacity>
            </Row>
        </Row>
    )
}