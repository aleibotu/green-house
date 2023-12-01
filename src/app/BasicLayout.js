'use client';
import {Avatar, ConfigProvider, Layout, Menu, Switch, theme, Typography} from "antd";
import StyledComponentsRegistry from '../lib/AntdRegistry';
import {useState} from "react";
import Link from 'next/link'
import {ContainerOutlined, DesktopOutlined, MailOutlined} from "@ant-design/icons";

const {Text} = Typography;
const {defaultAlgorithm, darkAlgorithm} = theme;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    // getItem(<Link href="/draft">新建</Link>, '1', <PieChartOutlined/>),
    getItem(<Link href="/draft">新建方案</Link>, 'sub1', <MailOutlined/>, [
        getItem('温室配置', '5'),
        getItem('作物配置', '6'),
        // getItem('Option 7', '7'),
        // getItem('Option 8', '8'),
    ]),
    getItem(<Link href="/templetes">方案模板</Link>, '2', <DesktopOutlined/>),
    getItem(<Link href="/mySolutions">我的方案</Link>, '3', <ContainerOutlined/>),

    // getItem('我的方案', 'sub2', <AppstoreOutlined/>, [
    //     getItem('Option 9', '9'),
        // getItem('Option 10', '10'),
        // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
];

export default function BasicLayout({children}) {
    const [light, setTheme] = useState(false);

    const onChange = (checked) => {
        setTheme(checked)
    }

    return (
        <StyledComponentsRegistry>
            <ConfigProvider
                theme={{
                    algorithm: light ? defaultAlgorithm : darkAlgorithm
                }}
            >
                <Layout style={{backgroundColor: light ? '#fff' : '#000'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100vw', height: '100vh'}}>
                        {/* left bar */}
                        <div
                            style={{
                                width: 240,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: light ? '#fafafa' : '#000c17'
                            }}
                        >
                            <div style={{flex: 1}}>
                                <div style={{
                                    backgroundColor: light ? '#fbf6ef' : '#000C26',
                                }}>
                                    <Typography.Title level={2} style={{padding: '0.3em 0.5em', margin:  0}}>
                                        Green House
                                    </Typography.Title>
                                </div>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme={light ? 'light' : 'dark'}
                                    items={items}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 8px',
                                    backgroundColor: light ? '#fbf6ef' : '#000C26'
                                }}
                            >
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <Avatar size={40}>USER</Avatar>
                                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 12}}>
                                        <Text>
                                            Admin
                                        </Text>
                                        <Text type="secondary">
                                            some lazy guy.
                                        </Text>
                                    </div>
                                </div>
                                <Switch checked={light} onChange={onChange}/>
                            </div>
                        </div>

                        {/* body */}
                        <div style={{flex: 1, overflowY: 'scroll'}}>
                            {children}
                        </div>
                    </div>
                </Layout>
            </ConfigProvider>
        </StyledComponentsRegistry>
    )
}
