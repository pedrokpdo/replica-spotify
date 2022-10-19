import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { MainHeader } from "../../components/MainHeader";

export const SearchScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeader />
            </Space>
            
        </ContainerComponent>
    )
}