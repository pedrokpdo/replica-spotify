import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MainHeader } from "../../components/MainHeader";

export const SettingsScreen = () => {
    return (
        <ContainerComponent back>
            <Space top={2}>
                <Title style={{ fontSize: 28 }}>Configurações</Title>
            </Space>
            <Divider top={4} bottom={2} />
            <Space>
                <Row>
                    <FullCard style={{ backgroundColor: '#222222', alignItems: 'center', paddingHorizontal: 32, borderRadius: 8, marginRight: 16 }}>
                        <Ionicons name='cloud-offline' color={'white'} size={24} />
                        <Title>Offline</Title>
                    </FullCard>
                    <FullCard style={{ backgroundColor: '#222222', alignItems: 'center', paddingHorizontal: 32, borderRadius: 8, marginRight: 16 }}>
                        <Ionicons name='eye-off' color={'white'} size={24} />
                        <Title>Offline</Title>
                    </FullCard>
                    <FullCard style={{ backgroundColor: '#222222', alignItems: 'center', paddingHorizontal: 32, borderRadius: 8, marginRight: 16 }}>
                        <Ionicons name='git-branch-sharp' color={'white'} size={24} />
                        <Title>Offline</Title>
                    </FullCard>
                </Row>
            </Space>
            <Space top={2}>
                <Title style={{ fontSize: 24 }}>Conta</Title>
                <TouchableOpacity style={{ marginTop: 16 }}>
                    <Title>Plano Premium</Title>
                    <Text top={.2} style={{ color: 'gray' }}>Veja seu plano</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 16 }}>
                    <Title>E-mail</Title>
                    <Text top={.2} style={{ color: 'gray' }}>pedromotoehm@gmail.com</Text>
                </TouchableOpacity>
            </Space>
            <Space top={4}>
                <Title style={{ fontSize: 24 }}>Economia de dados</Title>
                <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: 250 }}>
                        <Title>Qualidade de áudio</Title>
                        <Text top={.2} style={{ color: 'gray' }}>Define a qualidade do áudio como baixa (equivalente a 24kbit/s) e desativa o Canvas dos artistas</Text>
                    </View>
                    <MaterialCommunityIcons name="toggle-switch-off-outline" size={40} color='white' />
                </Row>
                <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: 250 }}>
                        <Title>Baixar somente audio</Title>
                        <Text top={.2} style={{ color: 'gray' }}>Define a qualidade do áudio como baixa (equivalente a 24kbit/s) e desativa o Canvas dos artistas</Text>
                    </View>
                    <MaterialCommunityIcons name="toggle-switch-off-outline" size={40} color='white' />
                </Row>
            </Space>
        </ContainerComponent>
    )
}