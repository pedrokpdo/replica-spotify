import React from "react";
import { AvatarComponent } from "../AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const MainHeader = () => {
    return (
        <Row style={{ alignItems: 'center' }}>
            <AvatarComponent/>
            <Title style={{ marginLeft: 16, fontSize: 26 }}>Buscar</Title>
        </Row>
    )
}