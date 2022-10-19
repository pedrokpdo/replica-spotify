import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { InputComponent } from "../../components/InputComponent";
import { MainHeader } from "../../components/MainHeader";
import { SearchComponent } from "../../components/SearchComponent";

export const SearchScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeader />
            </Space>
            <Space top={2}>
                <InputComponent />
            </Space>
            <Space top={2}>
                <Title bold style={{ alignSelf: 'center', fontSize: 18 }}>Navegar por todas as seções</Title>
                <Row style={{ flexWrap: 'wrap', justifyContent: 'space-between',  }}>
                    <SearchComponent color="#d46000" title="Podcasts" />
                    <SearchComponent color="#187a97" title="Feito para você" />
                    <SearchComponent color="#a71977" title="Lançamentos" />
                    <SearchComponent color="#7c854e" title="Brasil" />
                    <SearchComponent color="#5ca0b4" title="Sertanejo" />
                    <SearchComponent color="#b41f1f" title="Funk" />
                    <SearchComponent color="#1fb444" title="Rock" />
                    <SearchComponent color="#ff00ea" title="Sond" />
               
                </Row>
            </Space>
        </ContainerComponent>
    )
}