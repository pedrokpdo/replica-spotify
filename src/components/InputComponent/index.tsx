import React from "react";
import { TextInput, View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const InputComponent = () => {
    return (
        <TextInput style={{ backgroundColor: 'white', padding: 8, borderRadius: 2 }} placeholder='Buscar'/>       
    )
}