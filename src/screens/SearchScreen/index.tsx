import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { InputComponent } from "../../components/InputComponent";
import { MainHeader } from "../../components/MainHeader";

export const SearchScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeader />
            </Space>
            <Space top={2}>
                <InputComponent />
            </Space>
        </ContainerComponent>
    )
}