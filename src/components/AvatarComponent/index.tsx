import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    photo?: any;
    big?: any;
}

export const AvatarComponent = ({ photo, big=false }: Props) => {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} style={{ alignItems: 'center' }}>
            {photo ? (
                <Image source={photo} style={{ width: 100, height: 100 }} />
            ) : (
                <View style={{ backgroundColor: 'orange', width: big ? 120 : 36, height: big ? 120 : 36, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Title style={{ color: 'black', fontWeight: 'bold',fontSize: big ? 42 :  null }}>P</Title>
                </View>
            )}
        </TouchableOpacity>
    )
}