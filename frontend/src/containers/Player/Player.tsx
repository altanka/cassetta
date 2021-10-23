import React, { ChangeEvent, ChangeEventHandler, Dispatch, ReactElement } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from "react-redux";
import { PlayerState } from "../../store/reducers";
import { setVideo } from "../../store/actions";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';

import './Player.css'

import { SET_VIDEO_URL } from './../../context/API'

interface Props {

}

export default function Player({ }: Props): ReactElement {

    const videoUrl = useSelector<PlayerState, PlayerState["videoUrl"]>(
        (state) => state.videoUrl
    );

    const dispatch = useDispatch();

    const handleUpload = (file: File, fileList: File[]) => {
        dispatch(setVideoBackend(URL.createObjectURL(file), file.name))
        return false
    }

    const renderItem = (element: ReactElement, file: UploadFile, fileList: object[]) => {
        return (
            <div title="Play" className='file-element'>
                {element}
            </div>
        )
    }

    const setVideoBackend = (videoUrl: string, videoName: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoUrl: videoUrl, videoName: videoName })
        };
        console.log(SET_VIDEO_URL, requestOptions)
        return function (dispatch: (_: any) => any) {
            return fetch(SET_VIDEO_URL, requestOptions)
                .then(response => response.json())
                .then(
                    (response) => {console.log(response);dispatch(setVideo(response.videoUrl, response.videoName))},
                    (error) => console.log(error),
                );
        };
    }

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return (
        <Layout style={{ minHeight: "95vh", maxHeight: "95vh" }}>
            <Header className="header">
                <img width={"auto"} height={"60%"} src={logo} />

                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px', backgroundColor: "#ffffff" }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: "#ffffff"
                        }}
                    >
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            url={videoUrl}
                        />

                    </Content>
                </Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <div className='file-list-container'>
                            <div className='file-list'>
                                <Upload
                                    accept='video/*'
                                    listType="picture"
                                    beforeUpload={handleUpload}
                                    itemRender={renderItem}
                                >
                                    <Button style={{ position: "absolute", marginTop: -40, marginLeft: "22%" }} icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </div>

                        </div>
                    </Menu>
                </Sider>
            </Layout>
        </Layout >
    )

}
