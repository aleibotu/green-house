'use client';
import {useState} from "react";
import {useAtom} from "jotai";
import {Avatar, ConfigProvider, Layout, Menu, Switch, theme, Typography} from "antd";

import StyledComponentsRegistry from '../lib/AntdRegistry';

import {currentMenu, items} from "@/store/state";

const {Text} = Typography;
const {defaultAlgorithm, darkAlgorithm} = theme;

export default function BasicLayout({children}) {
    const [menu, setMenu] = useAtom(currentMenu)
    const [light, setTheme] = useState(true);

    const onChange = (checked) => {
        setTheme(checked)
    }

    const handleSelect = (e) => {
        setMenu(e.key)
    }

    return (
        <StyledComponentsRegistry>
            <ConfigProvider
                theme={{
                    algorithm: light ? defaultAlgorithm : darkAlgorithm
                }}
            >
                <Layout style={{backgroundColor: light ? '#fff' : '#000'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', height: '100vh'}}>
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
                                    defaultSelectedKeys={['5']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme={light ? 'light' : 'dark'}
                                    items={items}
                                    onSelect={handleSelect}
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
                        <div style={{flex: 1, height: '100vh'}}>
                            {children}
                        </div>
                    </div>
                </Layout>
            </ConfigProvider>
        </StyledComponentsRegistry>
    )
}
