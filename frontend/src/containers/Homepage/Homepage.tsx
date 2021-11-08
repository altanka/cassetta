import React, { ReactElement } from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import logo from '../../assets/logo.svg';


import './Homepage.css'


interface Props {

}

export default function Homepage({ }: Props): ReactElement {

    const { Header, Footer, Content } = Layout;

    return (
        <Layout className="layout" style={{ minHeight: "95vh", maxHeight: "95vh" }}>
            <Header className="header">
                <img width={"auto"} height={"60%"} src={logo} />
            </Header>
            <Content style={{ padding: '50px 50px' }}>
                <Button type="primary">
                    Create Room
                </Button>
            </Content>
        </Layout>
    )
}
