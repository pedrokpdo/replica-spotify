import React from "react";
import { Image, View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    photo?: any;
}

export const AvatarComponent = ({ photo }: Props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            {photo ? (
                <Image source={photo} style={{ width: 100, height: 100 }} />
            ) : (
                <View style={{ backgroundColor: 'orange', width: 36, height: 36, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Title style={{ color: 'black', fontWeight: 'bold' }}>P</Title>
                </View>
            )}
        </View>
    )
}