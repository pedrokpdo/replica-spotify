import React from "react";
import { AvatarComponent } from "../AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    title?: string;
    children?: any;
}

export const MainHeader = ({ title, children }: Props) => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row>
                <AvatarComponent />
                <Title style={{ marginLeft: 16, fontSize: 26 }}>{title}</Title>
            </Row>
            {children}
        </Row>
    )
}