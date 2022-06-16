import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderDashBoard from './Component/HeaderDashBoard';
const { Header, Sider, Content } = Layout;
type Props = {}
export default function Dashboard({ }: Props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='h-screen m-0 p-0'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    className='h-2/6 '
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
                <button className='w-full h-3/6' onClick={() => setCollapsed(!collapsed)} />
            </Sider>
            <Layout>
                <HeaderDashBoard/>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height:280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}