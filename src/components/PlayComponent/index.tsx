import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";

export const PlayComponent = () => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row>
                <View style={{ width: 50, height: 50, borderRadius: 9999, backgroundColor: 'white', marginRight: 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="play" size={24} color={'black'} />
                </View>
                <View style={{ width: 50, height: 50, borderRadius: 9999, backgroundColor: 'white', marginRight: 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="play-skip-back" size={24} color={'black'} />
                </View>
                <View style={{ width: 50, height: 50, borderRadius: 9999, backgroundColor: 'white', marginRight: 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="play-skip-forward" size={24} color={'black'} />
                </View>
            </Row>
            <AntDesign name="hearto" size={24} color={'white'} />
        </Row>
    )
}